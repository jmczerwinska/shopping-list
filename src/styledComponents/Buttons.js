import styled, { css } from 'styled-components';

const handleSecondary = ({ theme, secondary }) => (secondary ? theme.secondary : theme.primary);
const handleHover = ({ theme, secondary }) => (secondary ? theme.secondaryDark : theme.primaryDark);

export const Button = styled.button`
  cursor: pointer;
  background:  ${props => handleSecondary(props)};
  font-size: 1em;
  color: ${({ theme }) => theme.bg};
  border: 2px solid ${props => handleSecondary(props)};
  border-radius: 4px;
  margin: 0.5em;
  padding: ${({ icon }) => (icon ? '0.25em' : '0.5em 1em')};
  transition: 0.2s all ease-out;
  
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
    background-color: ${({ theme }) => theme.grey};
    border-color: ${({ theme }) => theme.grey};
  }
`;

export const InvertButton = styled(Button)`
  background-color: transparent;
  color: ${ props => handleSecondary(props)};
  :hover {
    background-color: ${ props => handleSecondary(props)};
    i {
      color: ${({ theme }) => theme.bg};
    }
  }
  :disabled {
    cursor: default;
    background-color: transparent;
    border-color: ${({ theme }) => theme.grey};
    i {
      color: ${({ theme }) => theme.grey};
    }
  }
`;

export const ButtonGroup = styled.div`
  width: fit-content;
  
  button {
    border-radius: 0;
    margin: 0;
    :first-child {
      border-radius: 4px 0 0 4px;
      border-right: none; 
    }
    :last-child {
      border-radius: 0 4px 4px 0;   
    } 
  }

  ${({ choose }) => (choose && css`
    button {
      :first-child{
        margin-right: 0.25em;
        position: relative;
        :after {
          content: 'or';
          height: 20px;
          width: 20px;
          background-color: ${({ theme }) => theme.bg};
          color: ${({ theme }) => theme.secondary};
          padding: 0.2em;
          border-radius: 50%;
          position: absolute;
          top: 4.5px;
          right: -17px;
          pointer-events: none;
          cursor: default;
        }
      }  
    }
  `)}
`;
