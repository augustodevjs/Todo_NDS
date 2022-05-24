import { Button } from '../Button';
import { ImgSvg } from '../ImgSvg';
import { Label } from '../Label';
import { TagHeader } from '../Tags/TagHeader';
import { TagParagraph } from '../Tags/TagParagraph';
import { ContainerForm } from './styles';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  });

  const onSubmit = (data: CreateUserData) => console.log(data);

  console.log('errors', errors);

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <ImgSvg />

      <TagHeader text="Autenticação" />

      <Label forLabel="email">
        Email
        <input
          {...register('email', { required: true })}
          placeholder="Digite seu melhor email"
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
          placeholder="Digite sua senha"
        />
        <span>{errors.password?.message}</span>
      </Label>

      <Button text="Entrar" />

      <TagParagraph text="Não possui uma conta?" />
    </ContainerForm>
  );
}
