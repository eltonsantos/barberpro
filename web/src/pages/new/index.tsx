import { useState, ChangeEvent } from 'react'
import Head from "next/head"
import { Sidebar } from "../../components/sidebar"

import { 
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Select
} from '@chakra-ui/react'

export default function New(){

  const [customer, setCustomer] = useState('')

  return(
    <>
      <Head>
        <title>BarberPro - Novo agendamento</title>
      </Head>
      <Sidebar>
        <Flex direction="column" align="flex-start" justify="flex-start">
          <Flex
            direction="row"
            w="100%"
            align="center"
            justify="flex-start"
          >
            <Heading fontSize="3xl" mt={4} mb={4} mr={4}>
              Novo corte
            </Heading>
          </Flex>

          <Flex 
            maxW="700px"
            pt={8}
            pb={8}
            width="100%"
            direction="column"
            align="center"
            justify="center"
            bg="barber.400"
          >
            <Input
              placeholder="Nome do cliente"
              w="85%"
              mb={3}
              size="lg"
              type="text"
              bg="barber.900"
              value={customer}
              onChage={ (e: ChangeEvent<HTMLInputElement>) => setCustomer(e.target.value) }
            />

            <Select bg="barber.900" mb={3} size="lg" w="85%">
              <option key={1} value="Barbar completa">Barba completa</option>
            </Select>

            <Button
              w="85%"
              size="lg"
              color="gray.900"
              bg="button.cta"
              _hover={{ bg: '#FFb13e' }}
            >
              Cadastrar
            </Button>

          </Flex>

        </Flex>
      </Sidebar>
    </>
  )
}