import { Header } from '../../components/Authentication/Components/Header';
import { SignupAuth } from '../../components/Authentication/SignupAuth';

export function Signup() {
  return (
    <>
      <Header text="Já possui uma conta?" />
      <SignupAuth />
    </>
  );
}
