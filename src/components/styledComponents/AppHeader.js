import styled, {css} from 'styled-components';

const AppHeader = styled.div`
  text-align: center;
  font-family: 'Advent Pro', sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem;

  h1 {
    margin-top: 0.5rem;
    display: inline-block;
    font-weight: 500;
  }
  
  ${({icon}) => icon && css`
    i {
      display: block
      }`}
`;

export default AppHeader;