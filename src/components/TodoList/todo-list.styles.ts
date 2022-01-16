import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2rem;
`;

export const TodoItem = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${ props => props.theme.color.element };
  border-bottom: 1px solid ${ props => props.theme.color.text.secondary };;
  font-size: 0.8rem;
  color: ${ props => props.done ? props.theme.color.text.secondary : props.theme.color.text.primary };
  text-decoration: ${ props => props.done ? 'line-through' : ''};

  .remove-button {
    display: none;
  }

  &:hover {
    .remove-button {
      display: block;
    }
  }

  &:first-child{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child{
    box-shadow: 0 20px 20px ${props => props.theme.color.text.secondary};
  }
`;

export const CheckButton = styled.button<{ done: boolean }>`
  border: none;

  ${ props => props.done ? `
    background: rgb(197,148,236);
    background: linear-gradient(322deg, rgba(197,148,236,1) 39%, rgba(0,212,255,1) 100%);
  ` : `
    background: transparent;
  ` }

  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${ props => props.theme.color.text.secondary };
`;

export const RemoveItemButton = styled.button`
  border: none;
  background: transparent;
`;

export const Text = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
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
