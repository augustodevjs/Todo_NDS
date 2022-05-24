import { Header } from '../../components/Authentication/Components/Header';
import { FormSignup } from '../../components/Authentication/FormSignup';

export function Signup() {
  return (
    <>
      <Header text="Já possui uma conta?" />
      <FormSignup />
    </>
  );
}
