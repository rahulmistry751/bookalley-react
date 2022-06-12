import "./App.css";
import { Header, RequiresAuth } from "./components";
import { Home, Login, SignUp, Wishlist, Cart,Profile } from "./pages";
import Mockman from "./mock/mockman";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./pages/ProductListing/ProductListing";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productlist" element={<ProductListing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/mockman" element={<Mockman />}></Route>
          <Route element={<RequiresAuth/>}>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
