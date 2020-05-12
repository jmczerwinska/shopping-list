import React, { useContext, useState, useEffect } from 'react';
import {ShoppingListContext} from '../context/ShoppingListContext';


const ItemForm = () => {
    const { addItem, editEl } = useContext(ShoppingListContext);

    const [title, setTitle] = useState('');

    useEffect(() => {
        if (editEl !== null) {
            setTitle(editEl.title);
            console.log(editEl)
        } else {
            setTitle('');
        }
    }, [editEl]);

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
            <input type="text" onChange={(e) => handleChange(e)} value={title} placeholder="Add new item..." />
            {/* <input type="number" />
            <input type="select" /> */}
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ItemForm;
