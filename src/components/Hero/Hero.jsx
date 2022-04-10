import "./Hero.css";
import React from "react";
import { hero } from "../../assets";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-content">
        <h2 className="hero-heading h1 fw-600">Build your library</h2>
        <h4 className="hero-subheading h3 fw-600 gray">
          Wide selection | 25M+ Books in 8 languages
        </h4>
        <Link className="button button-md fs-16" to="/productlist">
          View all
        </Link>
      </div>
      <div className="image-container hero-section-img">
        <img src={hero} alt="" className="image hero-img" />
      </div>
    </section>
  );
};
export { Hero };
