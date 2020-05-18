import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {light, dark} from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
  font-family: 'Montserrat', sans- serif;
  color: ${({ theme }) => theme.text};
  }
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme })=> theme.gradient};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-device-width: 799px) and (orientation: landscape) {
    height: auto;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <>
        <GlobalStyle />
        <StyledWrapper>
          <button>theme</button>
          {children}
        </StyledWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout;