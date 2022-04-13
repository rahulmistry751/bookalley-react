import React from "react";
import { Link } from "react-router-dom";
import "./PopularNow.css";
import { Card } from "../Card/Card";
import { useProduct } from "../../context/product-context";
const PopularNow = () => {
  const { products } = useProduct();

  return (
    <div className="popular-section">
      <div className="popular-heading">
        <h4 className="h3 fw-600">Popular now</h4>
        <Link to="/productlist" className="view-all">
          View all
        </Link>
      </div>

      <div className="popular-list">
        <ul className="list">
          {products.map((item) => (
            <li className="list-item" key={item._id}>
              <Card item={item} key={item._id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export { PopularNow };
