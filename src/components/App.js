import React from 'react';

import ShoppingListProvider from '../context/ShoppingListContext';

import Header from './Header';
import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';
import ClearList from './ClearList';
import { Layout, Card } from './styledComponents';

function App() {

  return (
      <Layout>
        <ShoppingListProvider>
          <Card>
            <Header />
            <ItemForm />
            <ShoppingList />
            <ClearList />
          </Card>
        </ShoppingListProvider>
      </Layout>
  );
}

export default App;
