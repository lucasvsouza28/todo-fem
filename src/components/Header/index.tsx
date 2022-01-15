// @ts-ignore
import MoonSvg from '../../assets/icon-moon.svg?component';
// @ts-ignore
import SunSvg from '../../assets/icon-sun.svg?component';
import { CreateTodo } from '../CreateTodo';
import * as SC from './header-styles';
import { DefaultTheme } from 'styled-components';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';

type HeaderProps = {
  currentTheme: DefaultTheme;
  setTheme: Function;
}

export const Header = ({
  currentTheme,
  setTheme,
}: HeaderProps) => {

  return (
    <SC.Container>
      <SC.InnerContainer>
        <SC.Title>
          todo
        </SC.Title>
        <SC.ThemeSwitcher
          onClick={() => {
            setTheme((state: DefaultTheme) => state === lightTheme ? darkTheme : lightTheme);
          }}
        >
          { currentTheme === lightTheme ? <MoonSvg /> : <SunSvg /> }
        </SC.ThemeSwitcher>

      </SC.InnerContainer>
      <SC.InnerContainer>
        <CreateTodo />
      </SC.InnerContainer>
    </SC.Container>
  )
}
