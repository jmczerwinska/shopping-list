import styled from 'styled-components';
import { colors } from './variable';

const { primary } = colors;

export const Icon = styled.i`
  color: ${primary};
  margin: 5px;
  text-align: center;
  display= inline-block;
  ${props => (props.circular && `
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 3px solid grey;
    border-radius: 50%;
  `)}
`;