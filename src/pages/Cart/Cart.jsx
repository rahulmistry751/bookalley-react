import "./Cart.css";
import { CartProduct } from "./component/CartProduct";
import { products } from "../../backend/db/products";
const Cart = () => {
  return (
    <>
      <h3 className="cart-header h3 fw-600">Cart</h3>
      <div className="cart-page">
        <div className="cart-items">
          {products.map((item) => (
            <li className="list-item">
              <CartProduct item={item} />
            </li>
          ))}
        </div>
        <div className="cart-bill">
          <div className="card text-only bill-section">
            <div className="card-content">
              <div className="bill">
                <h3 className="h3 bill-heading">Price details</h3>
                <div className="catalogue">
                  <p className="qty">Quantity</p>
                  <span className="amt">₹599</span>
                </div>
                <div className="catalogue">
                  <p className="discount">Discount</p>
                  <span className="amt">-₹49</span>
                </div>
                <div className="catalogue">
                  <p className="delivery-chg">Delivery charges</p>
                  <span className="amt">₹50</span>
                </div>
                <div className="catalogue total-amt-container">
                  <p className="total-amt">Total amount</p>
                  <span className="amt">₹600</span>
                </div>
                <button className="button ">Place the order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Cart };
