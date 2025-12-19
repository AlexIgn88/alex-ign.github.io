import React from 'react';
import './App.css';

import Layout from 'src/common/layout/layout';
import HomeScreen from 'src/pages/home-screen/home-screen';
import { APP_ROUTES } from 'src/app/routes';
import ProfileScreen from 'src/pages/profile-screen/profile-screen';
import { Route, Routes } from 'react-router-dom';
import ItemsScreen from 'src/pages/items-screen/items-screen';
import ShoppingCartScreen from 'src/pages/shopping-cart-screen/shopping-cart-screen';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={APP_ROUTES.INDEX} element={<HomeScreen />} />
          <Route path={APP_ROUTES.PROFILE} element={<ProfileScreen />} />
          <Route path={APP_ROUTES.PRODUCTS} element={<ItemsScreen />} />
          <Route path={APP_ROUTES.OPERATIONS} element={<ItemsScreen />} />
          <Route path={APP_ROUTES.CART} element={<ShoppingCartScreen />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
