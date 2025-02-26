import React from "react";
import {
	Card,
	Image,
	DataList,
	Badge,
	Progress,
	Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { helpers } from "@/helpers";
interface CardProps {
	url: string;
}
async function Cards({ url }: CardProps) {
	const res = await fetch(url);
	const data = await res.json();
	return (
		<Box overflow="hidden">
			<Link href={`/pokemon/${data.name}`}>
				<Card.Root
					minW={["340px", "sm", "xl", "2xl"]}
					overflow="hidden"
					p={2}
					flexDirection={["column", "row"]}
					maxW={["sm", "xl", "2xl"]}
					variant="outline"
					bg="white"
					borderColor="#3C5AA6"
					_hover={{
						borderColor: "#FFCB05",
					}}
				>
					<Image
						src={data.sprites.front_shiny}
						alt="Green double couch with wooden legs"
						minW="1/2"
						fill="contain"
						borderRadius="lg"
						bg="#2A75BB"
					/>
					<Card.Body flexDirection="column" justifyContent="space-between">
						<Card.Title
							textAlign="center"
							color="#3C5AA6"
							textTransform="capitalize"
							fontWeight="bold"
						>
							{data.name}
						</Card.Title>
						<DataList.Root orientation="horizontal" variant="bold" w="100%" mt={2}>
							{data.stats.map((item: { stat: { name: string }, base_stat: number }) => (
								<Box key={item.stat.name}>
									<DataList.Item
										display="flex"
										justifyContent="space-between"
										width="100%"
									>
										<DataList.ItemLabel
											color="#2A75BB"
											textTransform="capitalize"
											fontWeight="medium"
										>
											{item.stat.name}
										</DataList.ItemLabel>
										<DataList.ItemValue justifyContent="flex-end" color="#3C5AA6">
											{item.base_stat}%
										</DataList.ItemValue>
									</DataList.Item>
									<Progress.Root
										value={item.base_stat > 100 ? 100 : item.base_stat}
										shape="full"
										colorPalette="yellow"
										size="xs"
										variant="outline"
										mt={2}
									>
										<Progress.Track bg="#3C5AA6">
											<Progress.Range bg="#FFCB05" />
										</Progress.Track>
									</Progress.Root>
								</Box>
							))}
						</DataList.Root>
						<Box display="flex" flexDirection="row" gap={2} marginTop={4}>
							{data.types.map((type: { type: { name: string } }) => (
								<>
									<Badge
										variant="solid"
										bg={helpers.getTypeColor(type.type.name)}
										paddingInline={2}
										paddingBlock={1}
										display="flex"
										alignItems="center"
										fontSize="sm"
										textTransform="capitalize"
										color="white"
										border="1px solid"
										borderColor="#3C5AA6"
									>
										<Image
											src={`/icons/${type.type.name}.svg`}
											alt={type.type.name}
											width={4}
											height={4}
										/>
										{type.type.name}
									</Badge>
								</>
							))}
						</Box>
					</Card.Body>
				</Card.Root>
			</Link>
		</Box>
	);
}

export default Cards;
