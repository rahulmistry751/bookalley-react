import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import {useAuth} from '../../context/auth-context';
import "./Header.css";
import { useWishlistServices,useCartServices } from "../../hooks";
const Header = () => {
  const { wishlist, cart } = useProduct();
  const {userToken}=useAuth();
  const {updateWishlistLocally}=useWishlistServices();
  const {updateCartLocally}=useCartServices();
  useEffect(()=>{
    if(userToken){
      updateWishlistLocally();
      updateCartLocally();
    }
  },[userToken])
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand h2 fw-600">
          BookAlley
        </Link>
        <button className="button navbar-toggler" type="button">
          <span className="icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="navbar-item search-container">
          <input
            type="search"
            className="input search"
            placeholder="Search by name, title, author"
          />
          <button className="search-icon">
            <i className="far fa-search"></i>
          </button>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/productlist" aria-label="products link">
              Library
            </Link>
          </li>
          <li className="navbar-item">
            {userToken?<Link to="/profile">
              <i className="fas fa-user"></i>
            </Link>:<Link to="/login">
              <i className="fas fa-sign-in"></i>
            </Link>}
          </li>
          
          <li className="navbar-item">
            <Link
              to="/wishlist"
              aria-label="wishlist link"
              className={wishlist.length ? "badge-icon" : ""}
            >
              <div className="badge-container">
                <i className="fas fa-bookmark"></i>
                {wishlist.length ? (
                  <span className="badge">{wishlist.length}</span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/cart"
              aria-label="cart link"
              className={cart.length ? "badge-icon" : ""}
            >
              <div className="badge-container">
                <i className="fas fa-cart-plus fa-lg badge-icon"></i>
                {cart.length ? (
                  <span className="badge">{cart.length}</span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
