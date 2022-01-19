// @ts-ignore
import RemoveSvg from '../../assets/icon-cross.svg?component';
// @ts-ignore
import CheckSvg from '../../assets/icon-check.svg?component';
import { Draggable } from "react-beautiful-dnd";
import { useTodoListContext } from "../../contexts/TodoListContextProvider";
import { Todo } from '../../@types/todo';
import * as SC from './todo-item.styles';

type TodoItemProps = {
  todo: Todo;
  index: number,
};

export const TodoItem = ({
  todo,
  index
}: TodoItemProps) => {
  const {
    toggleDone,
    removeItem,
  } = useTodoListContext();

  return (
    <Draggable
      draggableId={todo.id}
      index={index}
    >
      {provided => (
        <SC.TodoItem
          done={todo.done}
          onClick={() => toggleDone(todo.id)}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <SC.CheckButton
            onClick={() => toggleDone(todo.id)}
            done={todo.done}
          >
            <CheckSvg />
          </SC.CheckButton>
          <SC.Text>
            {todo.text}
          </SC.Text>
          <SC.RemoveItemButton
            className='remove-button'
            onClick={() => removeItem(todo.id)}
          >
            <RemoveSvg />
          </SC.RemoveItemButton>
        </SC.TodoItem>
      )}
    </Draggable>
  )
}
