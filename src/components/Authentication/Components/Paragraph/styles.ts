import styled from 'styled-components';

export const ParagraphForm = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #e9ecef;
  font-weight: 500;
  font-size: 1.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    display: inline-block;
    width: 0.4375rem;
    height: 1.6875rem;
    background-color: #27c498;
    margin-right: 0.625rem;
  }
`;
