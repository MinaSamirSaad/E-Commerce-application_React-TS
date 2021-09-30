import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/homePage.component';
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
    </div>
  );
}

export default App;
