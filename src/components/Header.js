import React from 'react';
import { AppHeader, Icon } from '../styledComponents';

const Header = () => {
    return (
        <AppHeader>
            <Icon circular size="big" className="fas fa-shopping-bag"></Icon>
            <h1>Shopping List</h1>
        </AppHeader>
    )
}

export default Header;
