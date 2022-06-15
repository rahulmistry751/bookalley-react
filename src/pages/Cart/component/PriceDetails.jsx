import { useNavigate } from "react-router-dom";
import { useAuth,useProduct } from "../../../context";
import { useCartServices } from "../../../hooks";
import { displayRazorpay } from "../../../utils";
import {
  calculateDiscount,
  calculatePrice,
  calculateTotalPrice,
} from "../../../utils";
const PriceDetails = () => {
  const navigate=useNavigate();
  const { cart } = useProduct();
  const {userDetails,setUserDetails}=useAuth();
  const {clearCartLocally}=useCartServices();
  const totalPrice=calculateTotalPrice(cart)
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
                  <span className="amt">₹{totalPrice}</span>
                </div>
                <button className="button " onClick={()=>displayRazorpay(userDetails,totalPrice,navigate,clearCartLocally,setUserDetails)}>Place the order</button>
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
