import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const ShoppingListContext = createContext();

function ShoppingListContextProvider({ children }) {
    const [list, setList] = useState([
        { title: 'bread', checked: false, id: '1' },
        { title: 'butter', checked: false, id: '2' },
        { title: 'cheese', checked: false, id: '3' }
    ]);

    const [editEl, setEditEl] = useState(null);

    const addItem = (title) => {
        setList([...list, {title, checked: false, id: uuid()}])
    }

    const removeItem = (id) => {
        setList(list.filter(item => item.id !== id));
    }

    const checkItem = (id) => {
        list.map(el => {
            if (el.id === id) el.checked = !el.checked;
            return el;
        });
    }

    const findItem = (id) => {
        const item = list.find(el => el.id === id);
        setEditEl(item);
    }

    const clearAll = () => {
        setList([]);
    }

    const clearChecked = () => {
        setList(list.filter(el => el.checked === false));
    }

    return (
        <ShoppingListContext.Provider value={{ list, addItem, removeItem, checkItem, findItem, editEl, clearChecked, clearAll }}>
            {children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListContextProvider;

