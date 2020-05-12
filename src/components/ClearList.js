import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';

const ClearList = () => {
    const { clearAll, clearChecked } = useContext(ShoppingListContext);

    return (
        <div>
            <button onClick={clearChecked}>
                Clear checked
            </button>
            <button onClick={clearAll}>
                Clear all
            </button>
        </div>

    )
}

export default ClearList;
