import React from 'react';
import Header from '../Header';
import ShoppingList from '../ShoppingList';
import ItemForm from '../ItemForm';
import ClearList from '../ClearList';

import ShoppingListProvider from '../../context/ShoppingListContext';

import { Card } from '../styledComponents/Layout';
import './App.css';

function App() {

  return (
    <div className="App">
      <ShoppingListProvider>
        <Card>
          <Header />
          <ItemForm />
          <ShoppingList />
          <ClearList />
        </Card>
      </ShoppingListProvider>
    </div>
  );
}

export default App;
