import styled, {css} from 'styled-components';

const handleSecondary = ({ theme, secondary }) => (secondary ? theme.colors.secondary : theme.colors.primary);
const handleHover = ({ theme, secondary }) => (secondary ? theme.colors.secondaryDark : theme.colors.primaryDark);

export const Button = styled.button`
  cursor: pointer;
  background:  ${props => handleSecondary(props)};
  font-size: 1em;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${props => handleSecondary(props)};
  border-radius: 4px;
  margin: 0.5em;
  padding: ${({ icon }) => (icon ? '0.25em' : '0.25em 1em')};
  transition: 0.2s all ease - out;
  
  ${({ icon }) => (icon && css`
    i {
      color: ${props => handleSecondary(props)};
    }
  `)}

  :hover {
    background-color: ${props => handleHover(props)};
    border-color: ${props => handleHover(props)};
  }

  :disabled {
    cursor: default;
    background-color: ${({theme}) => theme.colors.grey};
    border-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const InvertButton = styled(Button)`
  background-color: transparent;
  color: ${ props => handleSecondary(props)};
    :hover {
    background-color: ${ props => handleSecondary(props)};
    i {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ButtonGroup = styled.div`
  border-radius: 3px;
  width: fit-content;
  button {
    border-radius: 0;
    margin: 0;
    border: none;
  }
   
  ${({ border }) => (border && css`
    border: 2px solid ${props => handleSecondary(props)};
    button {
      border-right: solid 2px ${props => handleSecondary(props)};
      &:last-child {
      border-right: none;
    }`)
  }
`;

