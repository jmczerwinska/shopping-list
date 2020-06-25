import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  font-size: 1em;
  color: ${({ theme }) => theme.text};
  border: 1.2px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  margin: 0.5em;
  padding: 0.32em 0.5em;
  transition: 0.2s all ease-out;
  outline: none;
  box-sizing: content-box;

  :focus, :hover {
    border-color: ${({ theme }) => theme.active};
    
  }
`;

export default Input;