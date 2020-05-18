import React from 'react';
import styled from 'styled-components';

const CustomCheckbox = styled.i`
  font-size:0.9em;
  line-height: 1.15em;
  padding: 2px;
  margin-right: 0.7em;
  color: ${({ theme }) => theme.bg};
  border: solid 2px ${({ theme }) => theme.primary};
  border-radius: 4px;
`;

const Label = styled.label.attrs(({ checkId }) => ({
  htmlFor: checkId || 'checkbox'
}))`
  position: relative;
  margin: 0.5em;
  display: inline-block;
`;

const Checkbox = styled.input.attrs(({checkId}) => ({
  type: 'checkbox',
  id: checkId || 'checkbox'
}))`
  position: absolute;
  opacity: 0;
  &:checked + ${Label} {
    color: ${({ theme }) => theme.grey};
    text-decoration: line-through;
    ${CustomCheckbox} {
    background-color: ${({ theme }) => theme.primary};    
    }
  }
`;

const StyledCheckbox = ({ label, ...props }) => {
  return (
    <div>
      <Checkbox {...props} />
      <Label {...props}>
        <CustomCheckbox className="fas fa-check" />
        {label}</Label>
    </div>
  )
}

export default StyledCheckbox;