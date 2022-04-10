import "./ProductListing.css";
import { Filter, Card } from "../../components";
import { products } from "../../backend/db/products";
const ProductListing = () => {
  return (
    <div className="product-page">
      <div className="col1 active">{<Filter />}</div>
      <div className="col2">
        <ul className="list">
          {products.map((item) => (
            <li className="list-item">
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export { ProductListing };
