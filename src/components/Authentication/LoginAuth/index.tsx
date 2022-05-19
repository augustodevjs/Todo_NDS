import { Button } from '../Global/Button';
import { Input } from '../Global/Input';
import { Label } from '../Global/Label';
import { Paragraph } from '../Global/Paragraph';
import { Section } from './styles';

export function LoginAuth() {
  return (
    <Section>
      <div>
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
