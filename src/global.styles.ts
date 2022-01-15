import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${props => props.theme.color.body}
}

button {
  cursor:pointer;

  &:active{
    transform: scale(.98);
  }
}
`;

export default global;
