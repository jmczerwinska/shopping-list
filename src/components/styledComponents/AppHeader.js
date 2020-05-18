import styled, {css} from 'styled-components';

const AppHeader = styled.div`
  text-align: center;
  font-family: 'Advent Pro', sans-serif;
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem;
  margin-left: -20px;

  h1 {
    margin-top: 0.5rem;
    display: inline-block;
    font-weight: 500;
    @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    }
  }
  
  ${({icon}) => icon && css`
    i {
      display: block
      }`}
`;

export default AppHeader;