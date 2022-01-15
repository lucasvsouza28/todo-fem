// @ts-ignore
import RemoveSvg from '../../assets/icon-cross.svg?component';
// @ts-ignore
import CheckSvg from '../../assets/icon-check.svg?component';

import * as SC from './todo-list.styles';
import { useTodoListContext } from '../../contexts/TodoListContextProvider';

export const TodoList = () => {
  const { items, toggleDone, removeItem, removeDoneItems, getPendingItemsCount } = useTodoListContext();

  return (
    <SC.Container>

      { items.map((todo, i) => (
        <SC.TodoItem
          key={'todo_' + i}
          done={todo.done}
          onClick={() => toggleDone(todo.id)}
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
      ))}

      {items.length > 0 && (
        <SC.ItemsStatus>
          <SC.ItemsLeft>{getPendingItemsCount()} items left</SC.ItemsLeft>
          <SC.ClearCompleteButton
            onClick={removeDoneItems}
          >
            Clear Complete
          </SC.ClearCompleteButton>
        </SC.ItemsStatus>
      )}

    </SC.Container>
  )
}
