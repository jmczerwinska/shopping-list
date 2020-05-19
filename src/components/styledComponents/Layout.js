import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  

  * {
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

 

  body {
  font-family: 'Montserrat', sans- serif;
  color: ${({ theme }) => theme.text};
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 600px) and (orientation: landscape){
    height: auto;
    overflow: visible;
  }
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
      <>
        <GlobalStyle />
        <StyledWrapper>
          {children}
        </StyledWrapper>
      </>
  )
}

export default Layout;