import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext2';
import { InvertButton, ButtonGroup, Icon, ListEl, CustomCheckbox } from './styledComponents';

const ListItem = ({ item, edit}) => {
    const { checkItem, removeItem, updateEditedEl } = useContext(ShoppingListContext);

    const handleChange = (item) => {
        checkItem(item.id);
    }

    const variants = {
        enter: {
            y: -10,
            opacity: 0
        },
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1
        },
        exit: {
            zIndex: 0,
            y: -1,
            opacity: 0,
        }
    };

    return (
            <ListEl
            positionTransition
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit">
            <CustomCheckbox
                checkId={item.id}
                label={item.title}
                onClick={() => handleChange(item)}
                className="fas fa-check" 
                checked={item.checked}
                />
                 <p>{item.title}</p>
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
