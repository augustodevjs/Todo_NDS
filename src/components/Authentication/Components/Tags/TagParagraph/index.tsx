import { Paragraph } from './styles';
import { Link } from 'react-router-dom';

type TagParagraphProps = {
  text: string;
};

export function TagParagraph({ text }: TagParagraphProps) {
  return (
    <Link to={text === 'Não possui uma conta?' ? '/signup' : '/login'}>
      <Paragraph>{text}</Paragraph>
    </Link>
  );
}
