import styled from 'styled-components';

const Icon = styled.i`
  color: ${({ theme }) => theme.colors.primary};
  margin: 5px;
  text-align: center;
  display: inline-block;
  ${({circular}) => (circular && `
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 3px solid grey;
    border-radius: 50%;
  `)}
`;

export default Icon;