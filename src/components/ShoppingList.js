import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import ListItem from './ListItem';
import {List, ListWrapper} from '../styledComponents';
import { AnimatePresence } from 'framer-motion';

const ShoppingList = () => {
    const { list } = useContext(ShoppingListContext);

    return (
        <ListWrapper>
            {list.length > 0
                ? (
                    <List>
                        <AnimatePresence initial={false}>
                            {list.map(item =>  <ListItem key={item.id} item={item} edit={item.checked} />)} 
                        </AnimatePresence>                                 
                    </List>
                )
                : (
                    <h4>Shopping list is empty!</h4>
                )
            }
        </ListWrapper>
    )        
}

export default ShoppingList;
