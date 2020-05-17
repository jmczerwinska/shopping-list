import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import { InvertButton, ButtonGroup, Icon, ListEl, StyledCheckbox } from './styledComponents';

const ListItem = ({ item, edit }) => {
    const { removeItem, findItem, checkItem } = useContext(ShoppingListContext);
    
    const handleChange = (item) => {
        checkItem(item.id);
    }

    return (
        <ListEl >
            <StyledCheckbox
                checkId={item.id}
                label={item.title}
                onChange={() => handleChange(item)}
                checked={item.checked}
                type="checkbox" />
            <ButtonGroup >
                <InvertButton 
                    disabled={edit === 'disabled' ? true : false}
                    onClick={() => findItem(item.id)}
                    icon
                >
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
