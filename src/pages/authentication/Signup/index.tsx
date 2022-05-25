import { Link } from 'react-router-dom';
import { FormContainer, Section } from './styles';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Header } from '../Components/Header';
import { ImgSvg } from '../Components/ImgSvg';
import { Label } from '../Components/Label';
import { Button } from '../Components/Button';

type CreateUserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const createUserFormSchema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 digitos')
      .required('A senha é obrigatória'),
    confirmPassword: yup
      .string()
      .required('Confirmar a senha é obrigatório')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required();

export function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const onSubmit = (data: CreateUserData) => console.log(data);

  console.log('errors', errors);

  return (
    <>
      <Header text="Já possui uma conta?" />
      <Section>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <ImgSvg />

          <h1>Nova Conta</h1>

          <Label forLabel="email">
            Nome
            <input
              {...register('name', { required: true })}
              type="text"
              name="name"
              id="name"
            />
            <span>{errors.name?.message}</span>
          </Label>

          <Label forLabel="email">
            Email
            <input
              {...register('email', { required: true })}
              type="email"
              name="email"
              id="email"
            />
            <span>{errors.email?.message}</span>
          </Label>

          <Label forLabel="password">
            Senha
            <input
              {...register('password')}
              type="password"
              name="password"
              id="password"
            />
            <span>{errors.password?.message}</span>
          </Label>

          <Label forLabel="password">
            Confirmação de Senha
            <input
              {...register('confirmPassword')}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <span>{errors.confirmPassword?.message}</span>
          </Label>

          <Button text="Entrar" />

          <p>
            <Link to="/login">Não possui uma conta?</Link>
          </p>
        </FormContainer>
      </Section>
    </>
  );
}
