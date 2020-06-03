import React, { useContext} from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { light } from './theme';

const CustomCheckbox = styled.i`
  font-size:0.9em;
  line-height: 1.15em;
  padding: 2px;
  margin-right: 0.7em;
  color: transparent;
  border: solid 2px ${({ theme }) => theme.primary};
  border-radius: 4px;
  transition: background-color 0.25s ease-in-out;
`;

const Slider = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.7em;
  text-align: center;
  line-height: 15px;
  padding: 0.12em;
  font-weight: 900;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.secondary};
  transition: all .3s linear;
  @media screen and (max-width: 480px) {
    height: 12px;
    width: 12px;
    line-height: 12px;
    font-size: 0.5rem;
    top: -1px;
    left: -1px;
  }
`;

const toggleLabelStyle = css`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 30px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 1em;

  @media screen and (max-width: 480px) {
    height:12px;
    width: 24px;
    top: -2px;
    right: -2px;
  }
`;

const Label = styled.label.attrs(({ checkId }) => ({
  htmlFor: checkId || 'checkbox'
}))`
  position: relative;
  margin: 0.5em;
  display: inline-block;
  color: ${({ theme })=> theme.text};

  ${({ toggle }) => toggle && toggleLabelStyle}
`;

const basicCheckedStyle = css`
  :checked + ${Label} {
    color: ${({ theme }) => theme.grey};
    text-decoration: line-through;
    ${CustomCheckbox} {
      color: ${({ theme }) => theme.bg};
      background-color: ${({ theme }) => theme.primary};    
    }
  }
`;

const toggleCheckedStyle = css`
  :checked + ${Label} {
    ${Slider} {
      transform: translateX(14px); 
      @media screen and (max-width: 480px){
        transform: translateX(12.5px);
      }   
    }
  }
`;

const Checkbox = styled.input.attrs(({ checkId }) => ({
  type: 'checkbox',
  id: checkId || 'checkbox'
}))`
  position: absolute;
  opacity: 0;
  
  ${({ basic }) => basic && basicCheckedStyle}

  ${({ toggle }) => toggle && toggleCheckedStyle} 
`;

const StyledCheckbox = ({ label, ...props }) => {
const theme = useContext(ThemeContext);

  return (
    <div>
      <Checkbox {...props} />
      <Label {...props}>
        {props.basic && <CustomCheckbox className="fas fa-check" />}
        {props.toggle && <Slider className={theme === light ? 'fas fa-sun' : 'fas fa-moon'} />} 
        {label}
      </Label>
    </div>
  )
}

export default StyledCheckbox;