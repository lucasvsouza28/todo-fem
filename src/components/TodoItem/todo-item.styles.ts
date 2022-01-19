import styled from 'styled-components';

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
