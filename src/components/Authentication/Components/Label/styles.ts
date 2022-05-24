import styled from 'styled-components';

export const LabelForm = styled.label`
  font-size: 1rem;
  display: block;
  color: #e9ecef;

  input {
    display: block;
    background-color: transparent;
    border: 1px solid #73778d;
    border-radius: 0.25rem;
    padding: 0.4375rem 0 0.4375rem 1rem;
    color: #fff;
    ::placeholder {
      font-size: 0.9375rem;
      color: #6c757d;
    }
  }

  span {
    font-size: 0.875rem;
    color: #f2182d;
  }
`;
