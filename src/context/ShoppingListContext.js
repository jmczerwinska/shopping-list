import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const ShoppingListContext = createContext();

function ShoppingListContextProvider({ children }) {
    const sampleList = [
        { title: 'bread', checked: false, id: '1' },
        { title: 'butter', checked: false, id: '2' },
        { title: 'cheese', checked: false, id: '3' }
    ]

    const storage = window.localStorage;

    const initialState = JSON.parse(storage.getItem('list')) || sampleList;

    const [list, setList] = useState(initialState);

    const [editedEl, setEditedEl] = useState(null);

    

    useEffect(() => {
        storage.setItem('list', JSON.stringify(list));
    }, [storage, list]);

    const addItem = (title) => {
        setList([{title, checked: false, id: uuid()}, ...list])
    }

    const removeItem = (id) => {
        setList(list.filter(item => item.id !== id));
    }

    const checkItem = (id) => {
        const check = (el) => {
            if (el.id === id) {
                el.checked = !el.checked;
            };
            return el;
        }

        const sortByChecked = (a, b) => a.checked < b.checked ? -1 : 1;

        const newList = list
            .map(el => check(el))
            .sort((el1, el2) => sortByChecked(el1, el2));
        
        setList(newList);
    }

    const findItem = (id) => {
        const item = list.find(el => el.id === id);
        setEditedEl(item);
    }

    const editItem = (title, id) => {
        const newList = list.map(el => {
            if (el.id === id) el.title = title;
            return el;
        });
        setList(newList);
        setEditedEl(null);
    }

    const clearAll = () => {
        setList([]);
    }

    const clearChecked = () => {
        setList(list.filter(el => el.checked === false));
    }

    return (
        <ShoppingListContext.Provider value={{
            list,
            addItem,
            removeItem, 
            checkItem,
            findItem,
            editedEl,
            editItem,
            clearChecked,
            clearAll 
        }}>
            {children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListContextProvider;

