import { Button } from '../Components/Button';
import { Input } from '../../Global/Input';
import { TagHeader } from '../Components/Tags/TagHeader';
import { Label } from '../Components/Label';

import { Section } from './styles';
import { TagParagraph } from '../Components/Tags/TagParagraph';
import { ImgSvg } from '../Components/ImgSvg';

export function LoginAuth() {
  return (
    <Section>
      <form action="#">
        <ImgSvg />

        <TagHeader text="Autenticação" />

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

        <TagParagraph text="Não possui uma conta?" />
      </form>
    </Section>
  );
}
