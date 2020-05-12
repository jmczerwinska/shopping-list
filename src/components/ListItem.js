import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext'

const ListItem = ({ item }) => {
    const { removeItem, findItem, checkItem } = useContext(ShoppingListContext);
    
    const handleChange = (item) => {
        checkItem(item.id);
    }

    return (
        <li>
            <input onChange={() => handleChange(item)} checked={item.checked} type="checkbox" />
            <span>{item.title}</span>
            <div>
                <button onClick={() => findItem(item.id)}>
                    Edit
                </button>
                <button onClick={() => removeItem(item.id)}>
                    Delete
                </button>
            </div>
        </li>
    )
}

export default ListItem;
