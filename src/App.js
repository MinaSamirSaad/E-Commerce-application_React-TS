import React from 'react';
import './App.css';
import {Route , Switch} from "react-router-dom"
import { HomePage } from './pages/HomePage/homePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/Shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
