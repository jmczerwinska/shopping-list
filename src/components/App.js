import React from 'react';
import useTheme from '../hooks/useTheme';
import { light, dark } from './styledComponents/theme';

import ShoppingListProvider from '../context/ShoppingListContext2';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';
import ClearList from './ClearList';
import { Layout, Card, StyledCheckbox } from './styledComponents';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark} >
      <Layout>
        <ShoppingListProvider>
          <Card>
            <StyledCheckbox
              toggle
              onChange={toggleTheme}
              checked={theme === 'dark'} />
            <Header />
            <ItemForm />
            <ShoppingList />
            <ClearList />
          </Card>
        </ShoppingListProvider>
      </Layout>
    </ThemeProvider>

  );
}

export default App;
