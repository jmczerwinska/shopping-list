import styled from 'styled-components';
import { colors } from './variable';

const {primary, primaryDark, secondary, secondaryDark, white} = colors;

const handleSecondary = props => (props.secondary ? secondary : primary);

export const Button = styled.button`
cursor: pointer;
background:  ${props => handleSecondary(props)};
font-size: 1em;
color: ${white};
border: 2px solid ${props => handleSecondary(props)};
border-radius: 4px;
margin: 0 0.5em;
padding: ${props => (props.icon ? '0.25em' : '0.25em 1em')};
transition: 0.2s all ease-out;

  &:hover {
    background-color: ${props => (props.secondary ? secondaryDark : primaryDark)};
}
`;

export const InvertButton = styled(Button)`
  background-color: transparent;
  color: ${props => handleSecondary(props)};
  &:hover {
    background-color: ${props => handleSecondary(props)};
    i {
      color: ${white};
    }
  }
`;

export const ButtonGroup = styled.div`
  border-radius: 3px;
  border: 2px solid #278180;
  width: fit-content;  
    button {
      border-radius: 0;
      margin: 0;
      border: none;
      border-right: solid 2px #278180;
      &:last-child {
        border-right: none;
      }
    }
`;
