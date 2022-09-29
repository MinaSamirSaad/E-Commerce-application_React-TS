import './App.css';
import {Route , Routes} from "react-router-dom"
import HomePage  from './routes/HomePage/homePage.component';
import ShopPage from './routes/ShopPage/shopPage.component';
import SignInAndSignUp from './routes/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './routes/header/header.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Header/>}>
          <Route index element={<HomePage/>}/>
          <Route path="Shop" element={<ShopPage/>}/>
          <Route path="signin" element={<SignInAndSignUp/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
