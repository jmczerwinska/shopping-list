import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.bg};
  }
  ::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.primary};
  outline: 1px solid ${({ theme }) => theme.active};
  border-radius: 4px;
  height: 50px;
  }

  @media screen and (max-device-width: 799px) and (orientation: landscape) {
    overflow: visible;
  }
`;

export const List = styled.ul` 
  list-style: none;
  font-size: 1.15em; 
`;

export const ListEl = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.7em 1.25em;

  &.dragging {
    opacity: 0;
  }
  
  @media screen and (max-device-width: 480px) {
    margin-left: 0;
    margin-right: 0.5em;
  }
`;
