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
  color: ${({ theme }) => theme.colors.black};
  }
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 34%, rgba(181,198,208,1) 54%, rgba(207,218,225,1) 81%, rgba(216,225,231,1) 90%, rgba(177,196,206,1) 100%);
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