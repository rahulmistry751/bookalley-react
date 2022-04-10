import "./App.css";
import { Header } from "./components";
import { Home, Login, SignUp, Wishlist, Cart } from "./pages";
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
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/mockman" element={<Mockman />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
