import { InputForm } from './styles';

type InputProps = {
  typeInput: string;
  nameInput: string;
  placeholderInput?: string;
  idInput: string;
};

export function Input({
  typeInput,
  nameInput,
  placeholderInput,
  idInput,
}: InputProps) {
  return (
    <div>
      <InputForm
        id={idInput}
        type={typeInput}
        name={nameInput}
        placeholder={placeholderInput}
      ></InputForm>
    </div>
  );
}
