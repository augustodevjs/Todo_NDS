import { ParagraphForm } from './styles';

type ParagraphProps = {
  text: string;
};

export function Paragraph({ text }: ParagraphProps) {
  return <ParagraphForm>{text}</ParagraphForm>;
}
