import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import { InvertButton, ButtonGroup } from './styledComponents/Buttons';
import {Icon} from './styledComponents/Icon';

const ListItem = ({ item }) => {
    const { removeItem, findItem, checkItem } = useContext(ShoppingListContext);
    
    const handleChange = (item) => {
        checkItem(item.id);
    }

    return (
        <li>
            <input onChange={() => handleChange(item)} checked={item.checked} type="checkbox" />
            <span>{item.title}</span>
            <ButtonGroup>
                <InvertButton onClick={() => findItem(item.id)} icon>
                    <Icon className="fas fa-pencil-alt"></Icon>
                </InvertButton>
                <InvertButton icon onClick={() => removeItem(item.id)}>
                    <Icon className="fas fa-trash-alt"></Icon>
                </InvertButton>
            </ButtonGroup>
        </li>
    )
}

export default ListItem;
