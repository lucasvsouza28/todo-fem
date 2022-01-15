import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import LightTheme from './themes/light';
import GlobalStyle from './global.styles';
import { TodoList } from "./components/TodoList";
import { TodoListContextProvider,  } from './contexts/TodoListContextProvider';
import { TodoFilters } from "./components/TodoFilters";

function App() {

  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TodoListContextProvider>
          <Header currentTheme={theme} setTheme={setTheme} />
          <TodoList />
          <TodoFilters />
      </TodoListContextProvider>
    </ThemeProvider>
  )
}

export default App