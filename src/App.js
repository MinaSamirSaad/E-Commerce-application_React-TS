import React from 'react';
import './App.css';
import {Route , Switch} from "react-router-dom"
import { HomePage } from './pages/HomePage/homePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/Shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
