import styled from 'styled-components';

const Card = styled.div`
  height: 97%;
  width: 97%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 4px;
  box-shadow: 6px 4px 33px -9px ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    height: 99%;
  }

  h4 {
    font-family: 'Advent Pro', sans-serif;
    color: ${({ theme }) => theme.active};
    text-align: center;
    font-size: 1.25em;
    margin: 2em 0;
  }
`;

export default Card;