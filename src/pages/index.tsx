import {Flex, Button, Stack,} from '@chakra-ui/react';
import { SubmitHandler, useForm, FieldError} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Input} from '../Components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
  error:FieldError;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha inválida'),
})

export default function Home() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
     <Flex
        as="form"
        width="100%"
        flexDir="column"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        onSubmit={handleSubmit(handleSignIn)}
        borderRadius={8}
      >
        <Stack spacing={4}>

        <Input name="email" type="email" label="E-mail" error={formState.errors.email?.message} {...register('email')} />
        
        <Input name="password" type="password" label="Senha" error={formState.errors.password?.message} {...register('password')} />

        </Stack>

        <Button type="submit" mt="6" isLoading={formState.isSubmitting} colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
