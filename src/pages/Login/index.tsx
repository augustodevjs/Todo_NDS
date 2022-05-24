import { Header } from '../../components/Authentication/Components/Header';
import { FormLogin } from '../../components/Authentication/FormLogin';

export function Login() {
  return (
    <>
      <Header text="Não possui uma conta?" />
      <FormLogin />
    </>
  );
}
