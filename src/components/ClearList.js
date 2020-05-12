import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';

const ClearList = () => {
    const { clearAll } = useContext(ShoppingListContext);

    return (
        <div>
            <button>
                Clear checked
            </button>
            <button onClick={clearAll}>
                Clear all
            </button>
        </div>

    )
}

export default ClearList;
