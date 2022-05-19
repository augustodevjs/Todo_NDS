import { HeaderTodo } from './styles';
import Brand from '../../../assets/Brand.svg';
import { Link } from 'react-router-dom';

type HeaderProps = {
  text: string;
};

export function Header({ text }: HeaderProps) {
  return (
    <HeaderTodo>
      <div>
        <img src={Brand} alt="logo" />
        <Link to={text === 'Não possui uma conta?' ? '/register' : '/login'}>
          {text}
        </Link>
      </div>
    </HeaderTodo>
  );
}
