import React from 'react';
import ShoppingList from '../ShoppingList';
import ShoppingListProvider from '../../context/ShoppingListContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <ShoppingListProvider>
        <ShoppingList />
      </ShoppingListProvider>
    </div>
  );
}

export default App;
