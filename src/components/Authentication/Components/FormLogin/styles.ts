import styled from 'styled-components';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  label + label {
    margin-top: 10px;
  }

  label + input {
    margin-top: 1.2rem;
  }
`;
