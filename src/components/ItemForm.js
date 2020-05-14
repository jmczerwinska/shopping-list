import React, { useContext, useState, useEffect } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import { Button } from './styledComponents';


const ItemForm = () => {
    const { addItem, editedEl, editItem, list } = useContext(ShoppingListContext);

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
            console.log(list)
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text"
                onChange={(e) => handleChange(e)}
                value={title} placeholder="Add new item..."
                required />
            <input type="number" placeholder="Quantity" />
            <Button type="submit">Add Item</Button>
        </form>
    )
}

export default ItemForm;
