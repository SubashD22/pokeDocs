import Cards from "@/components/card";
import { Flex, Box, Input, Button, Text, Image } from "@chakra-ui/react"
import Form from 'next/form'
import { Suspense } from "react";
import Loading from "./loading";

interface Results {
  url?: string
  id: number
}

type ResultsArray = Array<Results>

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const { query } = await searchParams
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${query || ''}`)
  const post = data.ok ? await data.json() : null
  const results: ResultsArray = Array.isArray(post?.results) ? post?.results : [post]
  return (
    <Suspense fallback={<Loading />}>
      <Form action={""}>
        <Flex
          gap={["2", "4"]}
          align="center"
          overflow='hidden'
          justifyContent='center'
          maxW='2xl'
          margin='2rem auto'
          px={[4, 6]}
          flexDirection={['column', 'row']}
          w="100%"
        >
          <Input
            type="text"
            name="query"
            placeholder="Search"
            color='#3C5AA6'
            bg="white"
            borderColor='#3C5AA6'
            _placeholder={{ color: '#2A75BB' }}
            _hover={{ border: '2px solid #FB1B1B' }}
            _focus={{ border: '2px solid #FB1B1B', boxShadow: '0 0 0 1px #FB1B1B' }}
            w={['100%']}
          />
          <Button
            bg='#3C5AA6'
            color='#FFCB05'
            _hover={{ bg: '#FFCB05', color: '#3C5AA6', border: '2px solid #3C5AA6' }}
            type="submit"
            w={['100%', 'auto']}
            fontWeight="bold"
          >
            Search
          </Button>
        </Flex>
      </Form>
      {data.ok ?
        <Flex
          gap={["2", "4"]}
          align="center"
          direction='column'
          overflow='hidden'
          px={[4, 6]}
          w="100%"
        >
          {results.map((p: Results, i: number) => {
            return <Box key={i} margin='0 auto'>
              <Cards url={p.url || `https://pokeapi.co/api/v2/pokemon/${p.id}`} />
            </Box>
          })}
        </Flex>
        :
        <Flex
          gap={["2", "4"]}
          align="center"
          direction='column'
          overflow='hidden'
          px={[4, 6]}
        >
          <Image
            src="/fail.gif"
            alt="fail"
            width={[50, 100]}
            height={[50, 100]}
          />
          <Text color='#3C5AA6' fontWeight="bold">No Pokemon found</Text>
        </Flex>
      }
    </Suspense>
  );
}
