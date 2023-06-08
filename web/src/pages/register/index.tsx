import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import logoImg from '../../../public/images/logo.svg'
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'

import Link from 'next/link'

export default function Register(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleRegister(){
    console.log(name)
    console.log(email)
    console.log(password)
  }


  return(
    <>
      <Head>
        <title>Cria sua conta no BarberPRO</title>
      </Head>
      <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">
        
        <Flex width={640} direction="column" p={14} rounded={8}>
          <Center p={4}>
            <Image
              src={logoImg}
              quality={100}
              width={240}
              objectFit="fill"
              alt="Logo barberpro"
            />
          </Center>

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="Nome da barbearia"
            type="text"
            mb={3}
            value={name}
            onChange={ (e) => setName(e.target.value) }
          />

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="email@email.com"
            type="email"
            mb={3}
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="********"
            type="text"
            mb={6}
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
          />

          <Button
            onClick={handleRegister}
            background="button.cta"
            mb={6}
            color="gray.900"
            size="lg"
            _hover={{ bg: "#ffb13e" }}
          >
            Cadastrar
          </Button>


          <Center mt={2}>
            <Link href="/login">
              <Text cursor="pointer" color="#ddd">Já possui uma conta? <strong>Faça login</strong></Text>
            </Link>
          </Center>

        </Flex>

      </Flex>
    </>
  )
}