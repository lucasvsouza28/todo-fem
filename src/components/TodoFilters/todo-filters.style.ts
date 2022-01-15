import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  margin-top: 1rem;
`;

export const InnerContainer = styled.div`
  background-color: ${props => props.theme.color.element};
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const ToggleFilterButton = styled.button<{ active: boolean }>`
  color: ${ props => props.active ? props.theme.color.text.active : props.theme.color.text.inactive };
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${ props => props.theme.color.text.hover };
  }
`;
