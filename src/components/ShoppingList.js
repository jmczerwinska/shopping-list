import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import ListItem from './ListItem';
import { List, ListWrapper } from './styledComponents';
import { AnimatePresence } from 'framer-motion';


const ShoppingList = () => {
    const { bought, toBuy } = useContext(ShoppingListContext);

    return (
        <ListWrapper>
            {bought.length > 0 || toBuy.length > 0
                ? (
                    <List>
                        <AnimatePresence initial={false}>
                             {toBuy.map((item, idx) =>
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    index={idx} />
                            )}

                            {bought.map(item =>
                                <ListItem
                                    key={item.id}
                                    item={item}
                                    edit="disabled" />
                            )}
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
