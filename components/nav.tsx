import { Box, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="center"
      whiteSpace="nowrap"
      borderBottom="1px solid"
      borderColor="#3C5AA6"
      bg="#2A75BB"
      px={10}
      py={3}
      maxH='80px'
    >
      <Flex alignItems="center" gap={8}>
        <Link href='/'>
          <Flex alignItems="center" gap={2}>
            <Image src='/Pokeicon.png' alt='PokéDocs' width={30} height={30} />
            <Box
              as="h2"
              color="#FFCB05"
              fontSize="xl"
              fontWeight="bold"
              lineHeight="tight"
              textShadow="-1px -1px 0 #3C5AA6, 1px -1px 0 #3C5AA6, -1px 1px 0 #3C5AA6, 1px 1px 0 #3C5AA6"
            >
              PokéDocs
            </Box>
          </Flex>
        </Link>
      </Flex>
    </Box>
  )
}

export default Nav