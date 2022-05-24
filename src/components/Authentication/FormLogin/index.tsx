import { ContainerForm, Section } from './styles';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../Components/Button';
import { Link } from 'react-router-dom';

import { Label } from '../Components/Label';
import { ImgSvg } from '../Components/ImgSvg';
import { FormControl } from 'react-bootstrap';
import { Input } from './components';

type CreateUserData = {
  email: string;
  password: string;
};

const createUserFormSchema = yup
  .object({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 digitos')
      .required('A senha é obrigatória'),
  })
  .required();

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CreateUserData) => console.log(data);

  console.log('errors', errors);

  return (
    <Section>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <ImgSvg />

        <h1>Autenticação</h1>

        <Input
          name="email"
          label="Email"
          error={errors.email?.message}
          register={register}
        ></Input>

        {/* <Label forLabel="email">
          Email
          <input
            {...register('email', { required: true })}
            placeholder="Digite seu melhor email"
            type="email"
            name="email"
            id="email"
          />
          <span>{errors.email?.message}</span>
        </Label> */}

        <Label forLabel="password">
          Senha
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          <span>{errors.password?.message}</span>
        </Label>

        <Button text="Entrar" />

        <p>
          <Link to="/signup">Não possui uma conta?</Link>
        </p>
      </ContainerForm>
    </Section>
  );
}
