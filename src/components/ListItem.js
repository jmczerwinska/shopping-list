import React, { useContext } from 'react';
import { ShoppingListContext } from '../context/ShoppingListContext';
import { InvertButton, ButtonGroup, Icon, ListEl, StyledCheckbox } from './styledComponents';

const ListItem = ({ item, edit, className }) => {
    const { removeItem, findItem, checkItem } = useContext(ShoppingListContext);

    const variants = {
        enter: {
            y: -20,
            opacity: 0,
            transition: {
                delay: 0.2,
                duration: 0.25
            }
        },
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1,
                duration: 0.25
            }
        },
        exit: {
            zIndex: 0,
            y: -20,
            opacity: 0,
            transition: {
                delay: 0.1,
                duration: 0.15,
            }
        }
    };
    
    const handleChange = (item) => {
        checkItem(item.id);
    }

    return (
        <ListEl layoutTransition={{
            type: "spring",
            damping: 100,
            stiffness: 1500,
        }}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit">
            <StyledCheckbox
                checkId={item.id}
                label={item.title}
                onChange={() => handleChange(item)}
                checked={item.checked}
                basic />
            <ButtonGroup >
                <InvertButton 
                    disabled={edit === 'disabled' ? true : false}
                    onClick={() => findItem(item.id)}
                    icon>
                    <Icon className="fas fa-pencil-alt"></Icon>
                </InvertButton>
                <InvertButton 
                    secondary
                    icon
                    onClick={() => removeItem(item.id)}>
                    <Icon className="fas fa-trash-alt"></Icon>
                </InvertButton>
            </ButtonGroup>
        </ListEl>
    )
}

export default ListItem;
