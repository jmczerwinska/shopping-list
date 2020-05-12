import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import ListItem from './ListItem';

const ShoppingList = () => {
    const { list } = useContext(ShoppingListContext);
    return (
        <div>
            {list.length > 0
                ? (
                    <ul>
                        {list.map(item => <ListItem key={item.id} item={item} />)}
                    </ul>
                )
                : (
                    <h4>Shopping list is empty!</h4>
                )
            }
        </div>
    )        
}

export default ShoppingList;
