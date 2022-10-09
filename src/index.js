import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';
import { CategoriesProvider } from './contexts/categories.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CategoriesProvider>
      <CartProvider>
    <App />
    </CartProvider>
    </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
  </React.StrictMode>
);

