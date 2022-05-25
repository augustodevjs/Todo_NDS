import { ReactFragment, ReactPortal } from 'react';
import { LabelForm } from './styles';

type LabelProps = {
  children: ReactFragment | ReactPortal | boolean | null | undefined;
  forLabel: string;
};

export function Label({ children, forLabel }: LabelProps) {
  return <LabelForm htmlFor={forLabel}>{children}</LabelForm>;
}
