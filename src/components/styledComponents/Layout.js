import styled from 'styled-components';
import { colors } from './variable';

const { primary, white, black } = colors;

export const Card = styled.div`
  height: 95vh;
  width: 95vw;
  max-width: 500px;
  background-color: ${white};
  border-radius: 4px;
  -webkit-box-shadow: 6px 4px 33px -9px ${black};
  -moz-box-shadow: 6px 4px 33px -9px ${black};
  box-shadow: 6px 4px 33px -9px ${black};
  overflow-y: scroll;
`;

export const Header = styled.div`
  text-align: center;
  font-family: 'Advent Pro', sans-serif;
  color: ${primary};
  padding: 0.3rem;
  border-bottom: 1px solid grey;

  h1 {
    margin-top: 0.5rem;
    display: inline-block;
    font-weight: 500;
  }
`;