import React, { useContext, useState, useEffect } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';


const ItemForm = () => {
    const { addItem, editedEl, editItem } = useContext(ShoppingListContext);

    const [title, setTitle] = useState('');

    useEffect(() => {
        if (editedEl !== null) {
            setTitle(editedEl.title);
            console.log(editedEl)
        } else {
            setTitle('');
        }
    }, [editedEl]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editedEl === null) {
            addItem(title);
            setTitle('');
        } else {
            editItem(title, editedEl.id);
        }
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
