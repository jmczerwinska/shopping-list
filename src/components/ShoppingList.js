import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import ListItem from './ListItem';
import {List, ListWrapper} from './styledComponents';
import {ReactSortable} from 'react-sortablejs';

const ShoppingList = () => {
    const { list, setList } = useContext(ShoppingListContext);

    return (
        <ListWrapper>
            {list.length > 0
                ? (
                    <List>
                        <ReactSortable 
                            list={list}
                            setList={setList}
                            animation={200}
                            delayOnTouchOnly={true}
                            delay={2}
                            ghostClass="ghost"
                            filter=".ignore-elements"
                            >
                            {list.map(item =>  <ListItem key={item.id} item={item}  />)}   
                        </ReactSortable>
                        
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
