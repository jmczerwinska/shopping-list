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
  background: linear-gradient(135deg, rgba(242,246,248,1) 0%, rgba(216,225,231,0.89) 22%, rgba(181,198,208,0.89) 51%, rgba(216,225,231,0.89) 56%, rgba(177,196,206,0.89) 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-device-width: 799px) and (orientation: landscape) {
    height: auto;
  }
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