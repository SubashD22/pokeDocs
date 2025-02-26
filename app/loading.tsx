import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function Loading() {
  return (
    <Box w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center' overflow='hidden' m='0 auto' p='0'>
      <Image src='/loading.gif' alt='PokéDocs' width='100vw' height='100vh' objectFit='cover' />
    </Box>
  )
}

export default Loading
