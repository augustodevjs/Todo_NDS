import { HeaderTodo } from './styles';
import { Link } from 'react-router-dom';
import Brand from '../../../../assets/Brand.svg';

type HeaderProps = {
  text: string;
};

export function Header({ text }: HeaderProps) {
  return (
    <HeaderTodo>
      <div>
        <img src={Brand} alt="logo" />
        <Link to={text === 'Não possui uma conta?' ? '/signup' : '/login'}>
          {text}
        </Link>
      </div>
    </HeaderTodo>
  );
}
