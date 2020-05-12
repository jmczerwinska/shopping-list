import React from 'react';
import ShoppingList from '../ShoppingList';
import ItemForm from '../ItemForm';
import ClearList from '../ClearList';
import ShoppingListProvider from '../../context/ShoppingListContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <ShoppingListProvider>
        <ItemForm />
        <ShoppingList />
        <ClearList />
      </ShoppingListProvider>
    </div>
  );
}

export default App;
