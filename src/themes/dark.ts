import { DefaultTheme } from 'styled-components';
import BgDarkMobile from '../assets/bg-mobile-dark.jpg';
import BgDarkDesktop from '../assets/bg-desktop-dark.jpg';

const theme: DefaultTheme = {
  color: {
    body: '#161620',
    element: '#25273c',
    text: {
      primary: '#c3c5dc',
      secondary: '#4e5065',
      input: '#75778c',
      active: '#507ddf',
      inactive: '#60617d',
      hover: '#FFF',
    }
  },
  image: {
    mobile: {
      header: BgDarkMobile
    },
    desktop: {
      header: BgDarkDesktop
    }
  }
};

export default theme;
