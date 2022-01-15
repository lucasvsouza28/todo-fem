import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    image: {
      mobile: {
        header: string;
      },
      desktop: {
        header: string;
      }
    },
    color: {
      body: string;
      element: string;
      text: {
        primary: string;
        secondary: string;
        input: string;
        active: string;
        inactive: string;
        hover: string;
      }
    }
  }
}
