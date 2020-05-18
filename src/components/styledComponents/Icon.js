import styled, { css } from 'styled-components';

const Icon = styled.i`
  color: ${({ theme }) => theme.primary};
  margin: 5px;
  text-align: center;
  display: inline-block;
  ${({circular}) => (circular && css`
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 3px solid ${({ theme }) => theme.active};
    border-radius: 50%;
  `)}

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
     ${({ circular }) => (circular && css`
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-width: 2px;
    `)}
    
  }
`;

export default Icon;