import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import * as SC from './todo-list.styles';
import { useTodoListContext } from '../../contexts/TodoListContextProvider';
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const {
    items,
    removeDoneItems,
    getPendingItemsCount,
    reorderItem,
  } = useTodoListContext();

  return (
    <SC.Container>
      <DragDropContext
        onDragEnd={reorderItem}
      >
        <Droppable
          droppableId="list"
        >
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              { items.map((todo, index) => (

                <TodoItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                />

              ))}
              {provided.placeholder}
            </div>
          )}

        </Droppable>
      </DragDropContext>

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
