import React from 'react';
import {Header} from './styledComponents/Layout';
import {Icon} from './styledComponents/Icon';

const AppHead = () => {
    return (
        <Header>
            <Icon circular className="fas fa-shopping-bag fa-2x"></Icon>
            <h1>Shopping List</h1>
        </Header>
    )
}

export default AppHead;
