import React from 'react'
import { Button, Card, For, Stack, Image, Text, DataList, Badge, Progress } from "@chakra-ui/react"
import Link from 'next/link'
interface CardProps {
    url: string;
}
async function Cards({ url }: CardProps) {
    const res = await fetch(url)
    const data = await res.json()
    return (
        <Link href={`/pokemon/${data.id}`}>
            <Card.Root minW='sm' overflow="hidden" padding={6}>
                <Image
                    src={data.sprites.front_default}
                    alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2">
                    <Card.Title textAlign='center' textTransform='capitalize'>{data.name}</Card.Title>
                        <DataList.Root orientation="vertical" variant='bold'>
                            {data.stats.map((item: any) => (
                                <DataList.Item key={item.stat.name}>
                                    <DataList.ItemLabel>{item.stat.name}</DataList.ItemLabel>
                                    {/* <DataList.ItemValue>{item.base_stat}</DataList.ItemValue> */}
                                    <Progress.Root value={item.base_stat > 100 ? 100 : item.base_stat} shape='rounded'>
                                        <Progress.Track>
                                       <Progress.Range />
                                        </Progress.Track>
                                    </Progress.Root>
                                </DataList.Item>
                            ))}
                        </DataList.Root>
                </Card.Body>
                <Card.Footer gap="4" marginTop={6}>
                    {data.types.map((type: any) => (
                        <>
                            <Badge variant="solid" colorPalette="blue" paddingInline={2}>{type.type.name}</Badge>
                        </>
                    ))}
                </Card.Footer>
            </Card.Root>
        </Link>
    )
}

export default Cards