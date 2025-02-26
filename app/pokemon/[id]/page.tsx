import React from 'react'
import { Badge, Box, DataList, Flex, Heading, Image, Progress, Text, Link } from '@chakra-ui/react';
import { helpers } from '@/helpers';
import AbilityCard from '@/components/abilityCard';


export async function generateMetadata({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return {
    title: `${id} | PokéDocs`,
    description: `Learn about ${id}'s stats, abilities, and moves. A detailed Pokémon guide on PokéDocs.`,
  }
}

async function Pokemon({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()
  return (
    <Box w='100%' display='flex' justifyContent='center' bg="#3C5AA6" alignItems='center' flexDirection='column'>
      <Box position="sticky" top="0" zIndex="10" bg="#3C5AA6" borderBottom="1px solid" borderColor="#2A75BB" width="100%" py={2}>
        <Flex
          justify="center"
          gap={4}
          maxW={["340px", "720px"]}
          mx="auto"
          px={[4, 4, 0]}
        >
          <Link
            href="#stats"
            textDecoration='none'
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: '#FFCB05',
              color: '#3C5AA6',
              fontWeight: 600
            }}
          >
            Stats
          </Link>
          <Link
            href="#abilities"
            textDecoration='none'
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: '#FFCB05',
              color: '#3C5AA6',
              fontWeight: 600
            }}
          >
            Abilities
          </Link>
          <Link
            href="#moves"
            textDecoration='none'
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: '#FFCB05',
              color: '#3C5AA6',
              fontWeight: 600
            }}
          >
            Moves
          </Link>
        </Flex>
      </Box>
      <Box
        minW={["340px", "sm", "xl", "720px"]}
        maxW={["340px", "sm", "xl", "720px"]}
        margin='2rem auto' p={[3, 4, 4]} bg='#2A75BB' rounded='lg' mx={[4, 4, 'auto']}>
        <Heading color='#FFCB05' textAlign='center' textTransform='capitalize'>{data.name}</Heading>
        <Flex justifyContent='center' p={4} bg='white' rounded='lg' marginTop={4}>
        <Image
                src={data.sprites?.other?.['official-artwork']?.front_default}
                alt={data.name}
                width={200}
                height={200}
                objectFit="contain"
                borderRadius="md"
                // border="2px solid"
                // borderColor="#3C5AA6"
                // bg="#2A75BB"
              />
        </Flex>
        <Flex justifyContent='center' gap='2rem' alignItems='center' flexDirection='column'>
          <Box display='flex' flexDirection='row' gap={1} marginTop={4}>
            {data.types.map((type: { type: { name: string } }) => (
              <>
                <Badge variant="solid" bg={helpers.getTypeColor(type.type.name)} paddingInline={2} paddingBlock={1} display='flex' alignItems='center' fontSize='sm' textTransform='capitalize' color='white'>
                  <Image src={`/icons/${type.type.name}.svg`} alt={type.type.name} width={4} height={4} />
                  {type.type.name}
                </Badge>
              </>
            ))}
          </Box>
          <Flex gap={2} w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box w={['100%', '100%', '60%']} id='stats'>
              <DataList.Root variant='bold' w='100%' orientation='horizontal'>
                <DataList.Item>
                  <DataList.ItemLabel fontWeight='bold' color='#FFCB05' textTransform='capitalize'>Height</DataList.ItemLabel>
                  <DataList.ItemValue justifyContent='flex-end' color='#FFCB05'>{data.height}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item>
                  <DataList.ItemLabel fontWeight='bold' color='#FFCB05' textTransform='capitalize'>Weight</DataList.ItemLabel>
                  <DataList.ItemValue justifyContent='flex-end' color='#FFCB05'>{data.weight}</DataList.ItemValue>
                </DataList.Item>
              </DataList.Root>
              <Box w='100%' marginTop={4} >
                <Text color='#FFCB05' fontWeight='bold' textAlign='center'>Stats</Text>
                <DataList.Root orientation="horizontal" variant='bold' w='100%' marginTop={4}>
                  {data.stats.map((item: { stat: { name: string }, base_stat: number }) => (
                    <Box key={item.stat.name}>
                      <DataList.Item display="flex" justifyContent="space-between" width="100%">
                        <DataList.ItemLabel fontWeight='bold' color='#FFCB05' textTransform='capitalize'>{item.stat.name}</DataList.ItemLabel>
                        <DataList.ItemValue justifyContent='flex-end' color='#FFCB05'>{item.base_stat}%</DataList.ItemValue>
                      </DataList.Item>
                      <Progress.Root marginTop={2} value={item.base_stat > 100 ? 100 : item.base_stat} shape='full' colorPalette='yellow' size='xs' variant="outline">
                        <Progress.Track bg="#3C5AA6">
                          <Progress.Range bg="#FFCB05" />
                        </Progress.Track>
                      </Progress.Root>
                    </Box>
                  ))}
                </DataList.Root>
              </Box>
            </Box>
            <Box w='100%' marginTop={4} id='abilities'>
              <Box>
                <Text color='#FFCB05' fontWeight='bold' textAlign='center'>Abilities</Text>
                <Flex p={2} gap={2} justifyContent='center' alignItems='center' overflowY='scroll' css={{ '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }} marginTop={4} wrap='wrap'>
                  {data.abilities.map((item: { ability: { name: string, url: string } }) => (
                    <Box key={item.ability.name}>
                      <AbilityCard ability={item.ability} />
                    </Box>
                  ))}
                </Flex>
              </Box>
              <Box w='100%' marginTop={4} id='moves'>
                <Text color='#FFCB05' fontWeight='bold' textAlign='center'>Moves</Text>
                <Box display='flex' flexDirection='row' flexWrap='wrap' gap={2} marginTop={4} p={2}>
                  {data.moves.map((item: { move: { name: string, url: string } }) => (
                    <Badge key={item.move.name} bg='#FFCB05' color='#3C5AA6' fontWeight='bold' size='md' textTransform='capitalize' variant='solid'>{item.move.name}</Badge>
                  ))}
                </Box>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Pokemon