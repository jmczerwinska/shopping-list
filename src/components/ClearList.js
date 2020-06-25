import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import { Button, ButtonGroup, Footer } from '../styledComponents';

const ClearList = () => {
    const { clearAll, clearChecked } = useContext(ShoppingListContext);

    return (
        <Footer>
            <ButtonGroup choose>
                <Button secondary onClick={clearAll}>
                    Clear All
                </Button>
                <Button secondary onClick={clearChecked}>
                    Checked
                </Button>
            </ButtonGroup>
        </Footer >

    )
}

export default ClearList;
