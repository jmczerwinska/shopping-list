import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext2';
import { InvertButton, ButtonGroup, Icon, ListEl, StyledCheckbox } from './styledComponents';

const ListItem = ({ item, edit, className, checked }) => {
    const { checkItem, removeItem, updateEditedEl } = useContext(ShoppingListContext);
    
    const handleChange = (item) => {
        checkItem(item.id);
    }

    return (
        <ListEl className={className}>
            <StyledCheckbox
                checkId={item.id}
                label={item.title}
                onChange={() => handleChange(item)}
                checked={checked}
                basic />
            <ButtonGroup >
                <InvertButton 
                    disabled={edit === 'disabled' ? true : false}
                    onClick={() => updateEditedEl(item.id)}
                    icon>
                    <Icon className="fas fa-pencil-alt"></Icon>
                </InvertButton>
                <InvertButton 
                    secondary
                    icon
                    onClick={() => removeItem(item.id)}
                    >
                    <Icon className="fas fa-trash-alt"></Icon>
                </InvertButton>
            </ButtonGroup>
        </ListEl>
    )
}

export default ListItem;
