import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type TodoListContextType = {
  items: Todo[];
  currentFilter: 'all' | 'active' | 'completed';
  changeFilter: (filter: 'all' | 'active' | 'completed') => void;

  createTodo: (title: string) => void;
  toggleDone: (id: string) => void;
  removeItem: (id: string) => void;
  removeDoneItems: () => void;
  getPendingItemsCount: () => number;
};

type TodoListContextProviderProps = {
  children: ReactNode;
};

const context = createContext({} as TodoListContextType);

export const TodoListContextProvider = ({
  children
}: TodoListContextProviderProps) =>{

  const [items, setItems] = useState<Todo[]>([]);
  const [filteredItems, setFilteredItems] = useState<Todo[]>([]);
  const [currentFilter, setCurrentFilter] = useState<'all' | 'active' | 'completed'>('all');

  const STORAGE_KEY: string = '_ARTP_ITEMS_';

  const persistItems = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

  const createTodo = (text: string) =>
    setItems(state => [{
      id: (new Date().getTime()).toString(),
      text,
      done: false,
    }, ...state]);

  const toggleDone = (id: string) => {
    const item = items.find(item => item.id === id);

    setItems(state => [...state.map(i => ( i.id === id ? { ...item, done: !item?.done } as Todo : i))]);
  };

  const removeItem = (id: string) => setItems(state => [...state.filter(i => i.id !== id)]);

  const removeDoneItems = () => setItems(state => [...state.filter(i => !i.done)]);

  const getPendingItemsCount = () => items.filter(i => !i.done).length;

  const changeFilter = (filter: 'all' | 'active' | 'completed') => setCurrentFilter(filter);

  const filterItems = () => setFilteredItems([...items.filter(item => currentFilter === 'active' ? !item.done : currentFilter === 'completed' ? item.done : true)]);

  useEffect(() => {
    const storageItems = localStorage.getItem(STORAGE_KEY);
    if (storageItems) {
      setItems(JSON.parse(storageItems));
    }
  }, []);

  useEffect(() => {
    filterItems();
  }, [currentFilter])

  useEffect(() => {
    filterItems();
    persistItems();
  }, [items]);

  return (
    <context.Provider value={{
      items: filteredItems,
      currentFilter,
      changeFilter,
      createTodo,
      toggleDone,
      removeItem,
      removeDoneItems,
      getPendingItemsCount,
    }}>
      {children}
    </context.Provider>
  );
};

export const useTodoListContext = () => useContext(context);
