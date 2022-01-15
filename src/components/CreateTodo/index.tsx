import { FormEvent, useState } from 'react';
import { useTodoListContext } from '../../contexts/TodoListContextProvider';
import * as SC from './create-todo.styles';

export const CreateTodo = () => {
  const { createTodo } = useTodoListContext();
  const [newTodo, setNewTodo] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    if (!newTodo) return;

    e.preventDefault();
    createTodo(newTodo);
    setNewTodo('');
  }

  return (
    <SC.Container
      onSubmit={handleSubmit}
    >
      <SC.Input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="create a new todo..."
      />
    </SC.Container>
  )
}
