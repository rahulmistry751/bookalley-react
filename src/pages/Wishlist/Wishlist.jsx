import "./Wishlist.css";
import { Card } from "../../components";
import { products } from "../../backend/db/products";
const Wishlist = () => {
  return (
    <section className="wishlist-section">
      <div className="wishlist-heading">
        <h4 className="h3 fw-600">Wishlist</h4>
      </div>

      <div className="wishlist-list">
        <ul className="list">
          {products.map((item) => (
            <li className="list-item">
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export { Wishlist };
