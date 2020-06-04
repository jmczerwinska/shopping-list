import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext2';
import ListItem from './ListItem';
import { List, ListWrapper } from './styledComponents';


const ShoppingList = () => {
    const { bought, toBuy } = useContext(ShoppingListContext);

   

    return (
        <ListWrapper>
            {bought.length > 0 || toBuy.length > 0
                ? (
                    <List>
                        {toBuy.map((item, idx) => 
                            <ListItem 
                                key={item.id}
                                item={item}
                                index={idx} />
                        )}

                        {bought.map(item => <ListItem key={item.id} item={item} checked edit="disabled" />)
                        }
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
