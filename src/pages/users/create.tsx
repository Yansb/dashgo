import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm, FieldError} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import { Input } from "../../Components/Form/Input";
import  {Header}  from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import Link from 'next/link';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation:string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha inválida').min(6, 'Senha precisa no minimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser(){
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)
  }

  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          as="form"
          p={["6","8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" bordercolor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome completo" error={formState.errors.name?.message} {...register('name')} />
              <Input name="email" type="email" label="E-mail" error={formState.errors.email?.message} {...register('email')} />
            </SimpleGrid>
            
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="password" label="Senha" type="password" error={formState.errors.password?.message} {...register('password')} />
              <Input name="passwordConfirmation" type="password" label="Confirmação da senha" error={formState.errors.passwordConfirmation?.message} {...register('passwordConfirmation')} />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack spacing="4">
              <Link passHref href='/users'>
                <Button colorScheme="whiteAlpha" as='a'>Cancelar</Button>
              </Link>
              <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}