import { Button } from '../Global/Button';
import { Input } from '../Global/Input';
import { Label } from '../Global/Label';
import { Paragraph } from '../Global/Paragraph';
import { Section } from './styles';

export function SignupAuth() {
  return (
    <Section>
      <div>
        <Paragraph text="Nova Conta" />
        <Label text="Nome" forLabel="nome" />
        <Input typeInput="text" idInput="nome" nameInput="nome" />

        <Label text="Email" forLabel="email" />
        <Input typeInput="email" idInput="email" nameInput="email" />

        <Label text="Senha" forLabel="password" />
        <Input typeInput="password" idInput="password" nameInput="password" />

        <Label text="Confirmação de Senha" forLabel="password" />
        <Input typeInput="password" idInput="password" nameInput="password" />

        <Button text="Cadastrar-se" />
      </div>
    </Section>
  );
}
