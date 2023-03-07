import { GlobalStyle } from "./glopal.styles";
import { useDispatch } from "react-redux";
import { useEffect , lazy , Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";

const HomePage = lazy(()=>import('./routes/HomePage/homePage.component'))
const ShopPage = lazy(()=>import('./routes/ShopPage/shopPage.component'))
const Authentication = lazy(()=>import('./routes/authentication/authentication.component'))
const CheckOut = lazy(()=>import('./routes/checkOut/checkOut.component'))
const Header = lazy(()=>import('./routes/header/header.component'))



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession())
    },[dispatch]);
  return (
    <Suspense fallback={<Spinner/>}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="Shop/*" element={<ShopPage />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkOut" element={<CheckOut />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
