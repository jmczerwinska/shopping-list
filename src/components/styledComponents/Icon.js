import styled, { css } from 'styled-components';

const Icon = styled.i`
  color: ${({ theme }) => theme.colors.primary};
  margin: 5px;
  text-align: center;
  display: inline-block;
  ${({circular}) => (circular && css`
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 3px solid ${({ theme }) => theme.colors.active};
    border-radius: 50%;
  `)}
`;

export default Icon;