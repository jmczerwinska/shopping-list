import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext2';
import ListItem from './ListItem';
import {List, ListWrapper} from './styledComponents';
// import {ReactSortable} from 'react-sortablejs';
import FlipMove from 'react-flip'

const ShoppingList = () => {
    const { bought, toBuy } = useContext(ShoppingListContext);

    return (
        <ListWrapper>
            {bought.length > 0 || toBuy.length > 0
                ? (
                    <List>
                        {/* <ReactSortable 
                            list={list}
                            setList={setList}
                            animation={200}
                            delayOnTouchOnly={true}
                            delay={2}
                            ghostClass="ghost"
                            filter=".ignore-elements"
                            >
                            {list.map(item =>  <ListItem key={item.id} item={item}  />)}   
                        </ReactSortable> */}
                        {
                            toBuy.map(item => <ListItem key={item.id} item={item} />)}
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
