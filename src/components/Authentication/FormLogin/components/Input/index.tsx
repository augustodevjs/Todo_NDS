/* eslint-disable react/prop-types */
import { InputHTMLAttributes } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';
import * as S from './styles';

type Props = FormControlProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    register?: UseFormRegister<any>;
  };

const Input: React.FC<Props> = ({
  name = '',
  register,
  label,
  error,
  onChange,
  ...rest
}) => {
  const inputRegister = register?.(name);

  const onInputChange = async (e: any) => {
    if (onChange) {
      onChange(e);
    }
    if (inputRegister) {
      await inputRegister.onChange(e);
    }
  };

  return (
    <Form.Group>
      {label && <label>{label}</label>}
      <S.Input
        {...inputRegister}
        onChange={onInputChange}
        isInvalid={error !== undefined}
        className={`form-control ${error !== undefined && 'is-invalid'}`}
        {...rest}
      ></S.Input>
      {error && <span>{error}</span>}
    </Form.Group>
  );
};

export default Input;
