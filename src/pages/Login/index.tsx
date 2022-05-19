import { Header } from '../../components/Authentication/Global/Header';
import { LoginAuth } from '../../components/Authentication/LoginAuth';

export function Login() {
  return (
    <>
      <Header text="Não possui uma conta?" />
      <LoginAuth />
    </>
  );
}
