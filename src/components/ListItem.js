import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext'

const ListItem = ({ item }) => {
const { removeItem } = useContext(ShoppingListContext);

    return (
        <li>
            <input type="checkbox" />
            <span>{item.title}</span>
            <div>
                <button>
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
