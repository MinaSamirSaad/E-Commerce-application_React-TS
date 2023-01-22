import { GlobalStyle } from "./glopal.styles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage/homePage.component";
import ShopPage from "./routes/ShopPage/shopPage.component";
import Authentcation from "./routes/authentication/authentication.component";
import Header from "./routes/header/header.component";
import CheckOut from "./routes/checkOut/checkOut.component";
import {
  creatUserDocumentFromAuth,
  onAuthStateChangedListiners,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChangedListiners((user) => {
      if (user) {
        creatUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="Shop/*" element={<ShopPage />} />
          <Route path="auth" element={<Authentcation />} />
          <Route path="checkOut" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
