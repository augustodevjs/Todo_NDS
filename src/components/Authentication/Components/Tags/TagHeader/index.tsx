import { H1 } from './styles';

type TagHeaderProps = {
  text: string;
};

export function TagHeader({ text }: TagHeaderProps) {
  return <H1>{text}</H1>;
}
