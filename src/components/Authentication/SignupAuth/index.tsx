import { Button } from '../Components/Button';
import { TagHeader } from '../Components/Tags/TagHeader';
import { Label } from '../Components/Label';

import { Section } from './styles';
import { ImgSvg } from '../Components/ImgSvg';
import { TagParagraph } from '../Components/Tags/TagParagraph';
import { Input } from '../../Global/Input';

export function SignupAuth() {
  return (
    <Section>
      <form action="#">
        <ImgSvg />

        <TagHeader text="Nova Conta" />

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
          idInput="confirmation"
          nameInput="confirmation"
          placeholderInput="Ex: 123120312"
        />

        <Button text="Cadastrar-se" />

        <TagParagraph text="Já possui uma conta?" />
      </form>
    </Section>
  );
}
