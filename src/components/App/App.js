import React, { useState } from 'react';
import Header from '../Header';
import ShoppingList from '../ShoppingList';
import ItemForm from '../ItemForm';
import ClearList from '../ClearList';
import ShoppingListProvider from '../../context/ShoppingListContext';
import './App.css';

function App() {

  return (
    <div className="App">
      <ShoppingListProvider>
        <Header />
        <ItemForm />
        <ShoppingList />
        <ClearList />
      </ShoppingListProvider>
    </div>
  );
}

export default App;
