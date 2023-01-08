import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            <CartProvider>
              <App />
            </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

