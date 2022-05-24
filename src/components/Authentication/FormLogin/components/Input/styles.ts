import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const Input = styled(Form.Control)`
  background-color: transparent;

  &:focus {
    background-color: transparent;
  }
`;
