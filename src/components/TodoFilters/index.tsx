import { useTodoListContext } from '../../contexts/TodoListContextProvider';
import * as SC from './todo-filters.style';

export const TodoFilters = () => {

  const { currentFilter, changeFilter } = useTodoListContext();

  return (
    <SC.Container>
      <SC.InnerContainer>
        <SC.ToggleFilterButton
          active={currentFilter === 'all'}
          onClick={() => changeFilter('all')}
        >
          All
        </SC.ToggleFilterButton>
        <SC.ToggleFilterButton
          active={currentFilter === 'active'}
          onClick={() => changeFilter('active')}
        >
          Active
        </SC.ToggleFilterButton>
        <SC.ToggleFilterButton
        active={currentFilter === 'completed'}
          onClick={() => changeFilter('completed')}
        >
          Completed
        </SC.ToggleFilterButton>
      </SC.InnerContainer>
    </SC.Container>
  )
}
