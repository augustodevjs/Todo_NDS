import { InputHTMLAttributes } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';
import { InputForm } from './styles';

type Props = FormControlProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    register?: UseFormRegister<any>;
  };

export function Input({ name = '', register, label, error, ...rest }: Props) {
  return (
    <Form.Group>
      {label && <label>{label}</label>}
      <InputForm {...register?.(name)} {...rest}></InputForm>
      {error && <span>{error}</span>}
    </Form.Group>
  );
}
