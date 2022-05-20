import styled from 'styled-components';

export const Section = styled.section`
  background-color: #25294c;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  input {
    width: 320px;
    &:focus {
      border: 1px solid #fff;
      outline: none;
    }
  }

  div + label {
    margin-top: 0.75rem;
  }
  button {
    width: 100%;
    border: none;
    padding: 0.5625rem 0;
    color: #e9ecef;
    font-size: 0.9375rem;
    font-weight: 500;
    margin-top: 1.5rem;
    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (max-width: 650px) {
    height: 100vh;
  }
`;
