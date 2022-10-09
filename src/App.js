import './App.css';
import {Route , Routes} from "react-router-dom"
import HomePage  from './routes/HomePage/homePage.component';
import ShopPage from './routes/ShopPage/shopPage.component';
import Authentcation from './routes/authentication/authentication.component';
import Header from './routes/header/header.component';
import CheckOut from './routes/checkOut/checkOut.component';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Header/>}>
          <Route index element={<HomePage/>}/>
          <Route path="Shop/*" element={<ShopPage/>}/>
          <Route path="auth" element={<Authentcation/>}/>
          <Route path='checkOut' element={<CheckOut/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
