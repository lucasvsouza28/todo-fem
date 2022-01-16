import styled from 'styled-components';

export const Container = styled.header`
  background-image: url(${props => props.theme.image.mobile.header});
  height: 250px;
  background-size: cover;

  @media(min-width: 768px){
    background-image: url(${props => props.theme.image.desktop.header});
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`;

export const InnerContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  @media(min-width: 768px){
    width: 750px;
  }
`;

export const ThemeSwitcher = styled.button`
  background: transparent;
  border: none;

  &:active {
    transform: scale(.98)
  }
`;
