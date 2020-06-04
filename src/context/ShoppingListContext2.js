import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const ShoppingListContext = createContext();

function ShoppingListContextProvider({ children }) {
    const sampleList = [
        { title: 'bread', id: '1' },
        { title: 'butter', id: '2' },
        { title: 'cheese', id: '3' }
    ]

    const storage = window.localStorage;

    const initialState = JSON.parse(storage.getItem('list'));

    const [toBuy, setToBuy] = useState(initialState ? initialState.toBuy : sampleList);

    const [bought, setBought] = useState(initialState ? initialState.bought : [])

    const [editedEl, setEditedEl] = useState(null);

    useEffect(() => {
        storage.setItem('list', JSON.stringify({
            toBuy,
            bought
        }));
    }, [storage, toBuy, bought]);

    const addItem = (title) => {
        setToBuy([{title, id: uuid()}, ...toBuy])
    }

    const removeItem = (id) => {
        const item = findItem(id);
        item 
            ? setToBuy(toBuy.filter(item => item.id !== id))
            : setBought(bought.filter(item => item.id !== id));
    }

    const checkItem = (id) => {
        let item = findItem(id);
        if (item !== undefined) {
            setBought([item, ...bought]);
            setToBuy(toBuy.filter(el=> el.id !== id));   
        } else {
            item = bought.find(el => el.id === id);
            setToBuy([...toBuy, item]);
            setBought(bought.filter(el => el.id !== id));
        }  
    }

    const findItem = (id) => {
        return toBuy.find(el => el.id === id);
    }

    const updateEditedEl = (id) => {
        setEditedEl(findItem(id));
    }

    const editItem = (title, id) => {
        const newList = toBuy.map(el => {
            if (el.id === id) el.title = title;
            return el;
        });
        setToBuy(newList);
        setEditedEl(null);
    }

    const clearAll = () => {
        setToBuy([]);
        setBought([]);
    }

    const clearChecked = () => {
        setBought([]);
    }

    return (
        <ShoppingListContext.Provider value={{
            toBuy,
            setToBuy,
            bought,
            addItem,
            removeItem, 
            checkItem,
            findItem,
            editedEl,
            updateEditedEl,
            editItem,
            clearChecked,
            clearAll 
        }}>
            {children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListContextProvider;

