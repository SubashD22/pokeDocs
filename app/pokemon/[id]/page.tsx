import React from 'react'
import { useRouter } from 'next/navigation';

async function Pokemon({params}: {
    params: Promise<{ id: string }>
  }) {
    const {id} = await params
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    console.log(data)
  return (
    <div>Pokemon</div>
  )
}

export default Pokemon