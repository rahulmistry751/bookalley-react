import { useProduct } from "../../../context/product-context";
import {
  calculateDiscount,
  calculatePrice,
  calculateTotalPrice,
} from "../../../utils";
const PriceDetails = () => {
  const { cart } = useProduct();
  console.log(cart);
  return (
    <>
      {cart.length ? (
        <div className="cart-bill">
          <div className="card text-only bill-section">
            <div className="card-content">
              <div className="bill">
                <h3 className="h3 bill-heading">Price details</h3>
                <div className="catalogue">
                  <p className="qty">Price ({cart.length} items)</p>
                  <span className="amt">₹{calculatePrice(cart)}</span>
                </div>
                <div className="catalogue">
                  <p className="discount">Discount</p>
                  <span className="amt">-₹{calculateDiscount(cart)}</span>
                </div>
                <div className="catalogue">
                  <p className="delivery-chg">Delivery charges</p>
                  <span className="amt fw-600">FREE</span>
                </div>
                <div className="catalogue total-amt-container">
                  <p className="total-amt">Total amount</p>
                  <span className="amt">₹{calculateTotalPrice(cart)}</span>
                </div>
                <button className="button ">Place the order</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export { PriceDetails };
