import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import ListItem from './ListItem';
import {List, ListWrapper} from './styledComponents';

const ShoppingList = () => {
    const { list } = useContext(ShoppingListContext);
    return (
        <ListWrapper>
            {list.length > 0
                ? (
                    <List>
                        {/* {list.map(item => !item.checked && <ListItem key={item.id} item={item} />)}
                        {list.map(item => item.checked && <ListItem key={item.id} item={item}  edit="disabled" />)} */}
                        {list.map(item =>  <ListItem key={item.id} item={item}  />)}
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
