import styled from "styled-components";

type Props = {
  hasScrolled: boolean,
  currentTheme: string
}


function checkTheme(theme: string) {
  return theme === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(35, 35, 35, 0.4)'
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 75px;
  color: ${props => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  /* z-index: 100; */
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
  background: ${
    ({ theme, hasScrolled, currentTheme }) => hasScrolled  
    ? checkTheme(currentTheme)
    : theme.colors.background
  };
  position: ${({ theme, hasScrolled }) => hasScrolled  ? 'fixed' : 'initial'};
  backdrop-filter: blur(20px);
`;