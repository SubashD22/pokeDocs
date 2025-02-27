import { Box, Card } from '@chakra-ui/react'
import React from 'react'
interface AbilityCardProps {
  ability: {
    name: string;
    url: string;
  }
}

async function AbilityCard({ ability }: AbilityCardProps) {
  const { name, url } = ability
  const data = await fetch(url)
  const abilityData = await data.json()
  return (
    <Card.Root
      width="300px"
      height='160px'
      bg="#2A75BB"
      borderColor="#3C5AA6"
      borderWidth="2px"
      _hover={{
        borderColor: "#FFCB05"
      }}
    >
      <Card.Body gap="2">
        <Card.Title
          textTransform='capitalize'
          color="#FFCB05"
          fontWeight="bold"
        >
          {name}
        </Card.Title>
        <Box h="70px" overflow='scroll'  css={{ '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
        <Card.Description color="white">
          {abilityData.effect_entries[0]?.language.name === 'en' ? abilityData.effect_entries[0].effect : abilityData.effect_entries[1].effect}
        </Card.Description>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default AbilityCard