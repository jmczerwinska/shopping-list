import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.white};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.white}; */
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>
          {children}
        </StyledWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout;