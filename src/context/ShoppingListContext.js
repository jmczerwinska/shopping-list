import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const ShoppingListContext = createContext();

function ShoppingListContextProvider({ children }) {
    const [list, setList] = useState([
        { title: 'bread', checked: false, id: '1' },
        { title: 'butter', checked: false, id: '2' },
        { title: 'cheese', checked: false, id: '3' }
    ]);

    const addItem = (title) => {
        setList([...list, {title, id: uuid()}])
    }

    const removeItem = (id) => {
        setList(list.filter(item => item.id !== id));
    }

    const clearAll = () => {
        setList([]);
    }

    const clearChecked = () => {

    }

    return (
        <ShoppingListContext.Provider value={{ list, addItem, removeItem, clearAll }}>
            {children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListContextProvider;

