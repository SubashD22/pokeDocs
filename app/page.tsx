import Image from "next/image";
import styles from "./page.module.css";
import Cards from "@/components/card";
import { Flex } from "@chakra-ui/react"

export default async function Home() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21')
  const post:any = await data.json()
  return (
    <div className={styles.page}>
      <Flex gap="4" align="center" wrap='wrap' >
      {post.results.map((p:any,i:number)=>{
        return <div key={i}>
          <Cards url={p.url}/>
        </div>
      })}
     </Flex>
    </div>
  );
}
