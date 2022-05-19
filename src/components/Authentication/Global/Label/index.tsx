import { LabelForm } from './styles';

type LabelProps = {
  text: string;
  forLabel: string;
};

export function Label({ text, forLabel }: LabelProps) {
  return <LabelForm htmlFor={forLabel}>{text}</LabelForm>;
}
