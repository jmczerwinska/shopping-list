import React, { createContext, useState, useEffect } from 'react';

export const ShoppingListContext = createContext();

function ShoppingListContextProvider({ children }) {
    const [list, setList] = useState([
        { title: 'bread', quantity: 2, unit: '', id: '1' },
        { title: 'butter', quantity: 200, unit: 'g', id: '2' },
        { title: 'cheese', quantity: 20, unit: 'dag', id: '3' },
        { title: 'milk', quantity: 2, unit: 'l', id: '3' }
    ])

    return (
        <ShoppingListContext.Provider value={{ list }}>
            {children}
        </ShoppingListContext.Provider>
    )
}

export default ShoppingListContextProvider;

