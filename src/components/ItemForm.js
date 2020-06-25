import React, { useContext, useState, useEffect } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import { Form, Button, Input } from './styledComponents';


const ItemForm = () => {
    const { addItem, editedEl, editItem } = useContext(ShoppingListContext);

    const [title, setTitle] = useState('');

    useEffect(() => {
        if (editedEl !== null) {
            setTitle(editedEl.title);
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
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Input 
                type="text"
                onChange={(e) => handleChange(e)}
                value={title} placeholder="Add new item..."
                required />
            <Button disabled={title ? false : true} type="submit">
                {
                    !editedEl 
                    ?'Add'
                    : "Edit"
                }
                
                </Button>
        </Form>
    )
}

export default ItemForm;
