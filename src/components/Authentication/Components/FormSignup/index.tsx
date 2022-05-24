import { ImgSvg } from '../ImgSvg';
import { Label } from '../Label';
import { TagHeader } from '../Tags/TagHeader';
import { FormContainer } from './styles';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TagParagraph } from '../Tags/TagParagraph';
import { Button } from '../Button';

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

export function FormSignup() {
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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <ImgSvg />

      <TagHeader text="Autenticação" />

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
        />
        <span>{errors.password?.message}</span>
      </Label>

      <Label forLabel="password">
        Senha
        <input
          {...register('confirmPassword')}
          type="password"
          name="password"
          id="password"
        />
        <span>{errors.confirmPassword?.message}</span>
      </Label>

      <Button text="Entrar" />

      <TagParagraph text="Não possui uma conta?" />
    </FormContainer>
  );
}
