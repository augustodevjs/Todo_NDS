import styled from 'styled-components';

export const FormContainer = styled.form`
  label + label {
    margin-top: 10px;
  }

  label + input {
    margin-top: 1.2rem;
  }
`;
