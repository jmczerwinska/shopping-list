import styled from 'styled-components';

export const ListWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.white};
  }
  ::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.primary};
  outline: 1px solid ${({ theme }) => theme.colors.active};
  border-radius: 4px;
  height: 50px;
  }

  @media screen and (max-device-width: 600px) and (orientation: landscape) {
    overflow: visible;
  }
`;

export const List = styled.ul` 
  list-style: none;
  font-size: 1.15em;
`;

export const ListEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.7em 1.25em;
`;
