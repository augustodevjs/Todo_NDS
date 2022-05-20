import { Button } from '../Components/Button';
import { Input } from '../../Input';
import { Paragraph } from '../Components/Paragraph';
import { Label } from '../Components/Label';

import { Link } from 'react-router-dom';

import Brand from '../../../assets/Brand.svg';

import { Section } from './styles';

export function SignupAuth() {
  return (
    <Section>
      <div>
        <Link to="/login">
          <img src={Brand} alt="logo" />
        </Link>

        <Paragraph text="Nova Conta" />

        <Label text="Nome" forLabel="nome" />
        <Input
          typeInput="text"
          idInput="nome"
          nameInput="nome"
          placeholderInput="Ex: Ribeiro Sousa"
        />

        <Label text="Email" forLabel="email" />
        <Input
          typeInput="email"
          idInput="email"
          nameInput="email"
          placeholderInput="ribeiro123@gmail.com"
        />

        <Label text="Senha" forLabel="password" />
        <Input
          typeInput="password"
          idInput="password"
          nameInput="password"
          placeholderInput="Ex: 123120312"
        />

        <Label text="Confirmação de Senha" forLabel="password" />
        <Input
          typeInput="password"
          idInput="password"
          nameInput="password"
          placeholderInput="Ex: 123120312"
        />

        <Button text="Cadastrar-se" />
      </div>
    </Section>
  );
}
