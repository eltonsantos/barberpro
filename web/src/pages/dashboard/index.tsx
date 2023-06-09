import Head from 'next/head';
import { 
  Flex, 
  Text,
  Heading,
  Button,
  Link as ChakraLink,
  useMediaQuery,
} from '@chakra-ui/react';

import Link from 'next/link'
import { IoMdPerson } from 'react-icons/io'

import { canSSRAuth } from '../../utils/canSSRAuth'
import { Sidebar } from '../../components/sidebar'

export default function Dashboard(){

  const [isMobile] = useMediaQuery("(max-width: 500px)")

  return(
    <>
      <Head>
        <title>BarberPRO - Minha barbearia</title>
      </Head>
      <Sidebar>
        <Flex direction="column" align="flex-start" justify="flex-start">
          <Flex w="100%" direction="row" align="center" justify="flex-start">
            <Heading fontSize="3xl" mt={4} mb={4} mr={4}>
              Agenda
            </Heading>
            <Link href="/new">
              <Button>Registrar</Button>
            </Link>
          </Flex>

          <ChakraLink
            w="100%"
            m={0}
            p={0}
            mt={1}
            bg="transparent" 
            style={{ textDecoration: 'none' }}                     
          >
            <Flex 
            w="100%"
            direction={isMobile ? "column" : "row"}
            p={4}
            rounded={4}
            mb={4}
            bg="barber.400"
            justify="space-between"
            align={isMobile ? "flex-start" : "center"}
            >
              <Flex direction="row" mb={isMobile ? 2 : 0} align="center" justify="center">
                <IoMdPerson size={28} color="#f1f1f1" />
                <Text fontWeight="bold" ml={4} noOfLines={1}>Matheus Fraga</Text>
              </Flex>

              <Text fontWeight="bold" mb={isMobile ? 2 : 0}>Corte completo</Text>
              <Text fontWeight="bold" mb={isMobile ? 2 : 0}>R$ 59.90</Text>
            </Flex>
          </ChakraLink>

        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {
      
    }
  }
})