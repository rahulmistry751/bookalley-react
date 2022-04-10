import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
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
            <Link to="/login">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="logout" aria-label="logout link">
              <i className="fas fa-sign-out"></i>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/wishlist" aria-label="wishlist link">
              <i className="fas fa-bookmark"></i>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" aria-label="cart link">
              <div className="badge-container">
                <i className="fas fa-cart-plus fa-lg badge-icon"></i>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
