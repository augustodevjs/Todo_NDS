import { Button } from '../Components/Button';
import { Input } from '../../Input';
import { Paragraph } from '../Components/Paragraph';
import { Label } from '../Components/Label';

import { Link } from 'react-router-dom';

import Brand from '../../../assets/Brand.svg';

import { Section } from './styles';

export function LoginAuth() {
  return (
    <Section>
      <div>
        <Link to="/login">
          <img src={Brand} alt="logo" />
        </Link>

        <Paragraph text="Autenticação" />
        <Label text="Email" forLabel="email" />
        <Input
          typeInput="email"
          idInput="email"
          nameInput="email"
          placeholderInput="Digite seu melhor email"
        />
        <Label text="Senha" forLabel="password" />
        <Input
          typeInput="password"
          idInput="password"
          nameInput="password"
          placeholderInput="Digite sua senha"
        />
        <Button text="Entrar" />
      </div>
    </Section>
  );
}
