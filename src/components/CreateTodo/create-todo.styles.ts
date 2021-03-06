import styled from 'styled-components';

export const Container = styled.form`
  background-color: ${props => props.theme.color.element};
  height: 60px;
  width: 100%;
  display: flex;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  padding: 0 1rem;
  flex: 1;
  color: ${props => props.theme.color.text.primary};

  &:focus {
    border: none;
    outline: none;
  }
`;
