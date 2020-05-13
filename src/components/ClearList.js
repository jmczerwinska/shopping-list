import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import { Button } from './styledComponents/Buttons';

const ClearList = () => {
    const { clearAll, clearChecked } = useContext(ShoppingListContext);

    return (
        <div>
            <Button secondary onClick={clearChecked}>
                Clear checked
            </Button>
            <Button secondary onClick={clearAll}>
                Clear all
            </Button>
        </div>

    )
}

export default ClearList;
