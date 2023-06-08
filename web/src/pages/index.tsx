import Head from 'next/head'
import { Flex, Text } from "@chakra-ui/react"

export default function Home(){
  return(
    <>
      <Head>
        <title>BarberPRO - Seu sistema completo</title>
      </Head>
      <Flex>
        <h1>BarberPRO</h1>
      </Flex>
    </>
  )
}