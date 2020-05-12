import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import ListItem from './ListItem';

const ShoppingList = () => {
    const { list } = useContext(ShoppingListContext);
    return (
        <ul>
            {list.map(item => <ListItem key={item.id} item={item} />)}

        </ul>
    )
}

export default ShoppingList;
