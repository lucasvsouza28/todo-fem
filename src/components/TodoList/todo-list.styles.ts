import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2rem;
`;

export const ItemsStatus = styled.div`
  display: flex;
  background-color: ${ props => props.theme.color.element };
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 9px;
`;

export const ItemsLeft = styled.div`
  color: ${ props => props.theme.color.text.input };
  font-size: 12px;
`;

export const ClearCompleteButton = styled.button`
  background: transparent;
  border: none;
  font-size: 12px;
  color: ${ props => props.theme.color.text.input };
  &:hover {
    color: ${ props => props.theme.color.text.hover };
  }
`;
