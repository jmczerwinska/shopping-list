import React, { useContext, useState } from 'react';
import {ShoppingListContext} from '../context/ShoppingListContext';


const ItemForm = () => {
    const { addItem } = useContext(ShoppingListContext);

    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(title);
        setTitle('');
    }
    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => handleChange(e)} value={title} type="text" />
            {/* <input type="number" />
            <input type="select" /> */}
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ItemForm;
