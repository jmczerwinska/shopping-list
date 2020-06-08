import React, { useContext, useRef, useState } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext2';
import { InvertButton, ButtonGroup, Icon, ListEl, StyledCheckbox } from './styledComponents';

const ListItem = ({ item, index, edit, checked }) => {
    const { toBuy, setToBuy, checkItem, removeItem, updateEditedEl } = useContext(ShoppingListContext);

    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();
    
    const handleChange = (item) => {
        checkItem(item.id);
    }

    const handleDragStart = (e, index) => {
        dragItem.current = index;
        dragNode.current = e.target;

        dragNode.current.addEventListener('dragend', handleDragEnd)
        
        setTimeout(() => {
            setDragging(true);
        }, 0); 
    }

    const handleDragEnd = (e) => {
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    }

    const handleDragEnter = (e, index) => {
        console.log(console.log(dragItem.current, dragNode.current, index))
        if (dragNode.current !== e.target) {
            console.log('Target is NOT the same as dragged item')
            setToBuy(oldList => {
                // const movedItem = toBuy.find((item, i) => index === i);
                // const remainingItems = toBuy.filter((item, i) => index !== i);

                // const reorderedItems = [
                //     ...remainingItems.slice(0, dragNode.current),
                //     movedItem,
                //     ...remainingItems.slice(dragNode.current)
                // ];

                // return reorderedItems;
                let newList = JSON.parse(JSON.stringify(oldList))
                newList.splice(index, 0, newList.splice(dragItem.current, 1)[0])
                dragItem.current = item;
                console.log(dragItem.current)
                // localStorage.setItem('List', JSON.stringify(newList));
                return newList
            })
        }
    }

    const addClass = (index) => {
        const currentItem = dragItem.current;
        return currentItem === index ? 'dragging' : null;
    }

    return (
        <ListEl
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={dragging ? (e) => handleDragEnter(e, index) : null}
            className={dragging ? addClass(index) : null}>
            <StyledCheckbox
                checkId={item.id}
                label={item.title}
                onChange={() => handleChange(item)}
                checked={checked}
                basic />
            <ButtonGroup>
                <InvertButton 
                    disabled={edit === 'disabled' ? true : false}
                    onClick={() => updateEditedEl(item.id)}
                    icon>
                    <Icon className="fas fa-pencil-alt"></Icon>
                </InvertButton>
                <InvertButton 
                    secondary
                    icon
                    onClick={() => removeItem(item.id)}
                    >
                    <Icon className="fas fa-trash-alt"></Icon>
                </InvertButton>
            </ButtonGroup>
        </ListEl>
    )
}

export default ListItem;
