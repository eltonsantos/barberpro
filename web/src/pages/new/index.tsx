import { useState, ChangeEvent } from 'react'
import Head from "next/head"
import { Sidebar } from "../../components/sidebar"

import { 
  Flex,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  Input,
  Select
} from '@chakra-ui/react'

import { FiChevronLeft } from 'react-icons/fi'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { setupAPIClient } from '../../services/api'

import { useRouter } from 'next/router'

interface HaircutProps{
  id: string;
  name: string;
  price: string | number;
  status: boolean;
  user_id: string;
}

interface NewProps{
  haircuts: HaircutProps[];
}

export default function New({ haircuts }: NewProps){

  const [customer, setCustomer] = useState('')
  const [haircutSelected, setHaircutSelected] = useState(haircuts[0])
  const router = useRouter();

  function handleChangeSelect(id: string){
    
    const haircutItem = haircuts.find(item => item.id === id)

    setHaircutSelected(haircutItem)

  }

  async function handleRegister(){

    if(customer === ''){
      alert("Preencha o nome do cliente.")
      return;
    }
    
    try{

      const apiClient = setupAPIClient();
      await apiClient.post('/schedule', {
        customer: customer,
        haircut_id: haircutSelected?.id  
      })

      router.push('/dashboard')

    }catch(err){
      console.log(err);
      alert("Erro ao registrar!")
    }
    
  }

  return(
    <>
      <Head>
        <title>BarberPro - Novo agendamento</title>
      </Head>
      <Sidebar>
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Flex
            direction="row"
            w="100%"
            align="center"
            justify="flex-start"
          >
            <ChakraLink
              href="/haircuts"
              style={{ textDecoration: 'none' }} 
            >
              <Button 
                bg="transparent"
                _hover={{ background: 'gray.700' }}
                p={4} 
                display="flex" 
                alignItems="center" 
                justifyItems="center" 
                mr={4}
                textDecoration="none"
                color="gray.100"
              >
                <FiChevronLeft
                  size={24}
                  color="gray.100"
                />
                Voltar
              </Button>
            </ChakraLink>
            <Heading color="orange.900" fontSize="3xl" mt={4} mb={4} mr={4}>
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
              onChange={ (e: ChangeEvent<HTMLInputElement>) => setCustomer(e.target.value) }
            />

            <Select bg="barber.900" mb={3} size="lg" w="85%" onChange={ (e) => handleChangeSelect(e.target.value) }>
              {haircuts?.map( item => (
                <option style={{ backgroundColor: '#FFF', color: '#000' }}  key={item?.id} value={item?.id}>{item?.name}</option>
              ))}
            </Select>

            <Button
              w="85%"
              size="lg"
              color="gray.900"
              bg="button.cta"
              _hover={{ bg: '#FFb13e' }}
              onClick={handleRegister}
            >
              Cadastrar
            </Button>

          </Flex>

        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  try{

    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/haircuts', {
      params:{
        status: true,
      }
    })

    if(response.data === null){
      return{
        redirect:{
          destination: '/dashboard',
          permanent: false,
        }
      }
    }

    return{
      props:{
        haircuts: response.data
      }
    }

  }catch(err){
    console.log(err);
    return{
      redirect:{
        destination: '/dashboard',
        permanent: false,
      }
    }
  }

})