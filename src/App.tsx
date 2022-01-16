import styled from 'styled-components';
import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import defaultTheme from './themes/dark';
import GlobalStyle from './global.styles';
import { TodoList } from "./components/TodoList";
import { TodoListContextProvider,  } from './contexts/TodoListContextProvider';
import { TodoFilters } from "./components/TodoFilters";

function App() {

  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TodoListContextProvider>
          <Header currentTheme={theme} setTheme={setTheme} />
          <AppContainer>
            <TodoList />
            <TodoFilters />
          </AppContainer>
      </TodoListContextProvider>
    </ThemeProvider>
  )
}

const AppContainer = styled.main`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 750px;
  }
`;

export default App
