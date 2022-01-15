import { DefaultTheme } from 'styled-components';
import BgLightMobile from '../assets/bg-mobile-light.jpg';
import BgLightDesktop from '../assets/bg-desktop-light.jpg';

const theme: DefaultTheme = {
  color: {
    body: '#f7f6f9',
    element: '#ffffff',
    text: {
      primary: '#65636e',
      secondary: '#dbdbdc',
      input: '#c1c0c6',
      active: '#4377e3',
      inactive: '#95959f'
    }
  },
  image: {
    mobile: {
      header: BgLightMobile
    },
    desktop: {
      header: BgLightDesktop
    }
  }
};

export default theme;
