import styled from 'styled-components';

const Card = styled.div`
  height: 95vh;
  width: 95vw;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 6px 4px 33px -9px ${({ theme }) => theme.colors.black};
  overflow-y: scroll;
`;

export default Card;