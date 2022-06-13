import { useProduct } from "../../context/product-context";
import "./Cart.css";
import { CartProduct } from "./component/CartProduct";
import { PriceDetails } from "./component/PriceDetails";
import { ToastContainer } from "react-toastify";
const Cart = () => {
  const { cart } = useProduct();

  return (
    <>
      <h3 className="cart-header h3 fw-600">
        {/* {cart.length ? "My Cart" : "Your cart is empty"} */}Cart
      </h3>
      {cart.length ? (
        <div className="cart-page">
          <div className="cart-items">
            {cart.map((item) => (
              <li className="list-item" key={item._id}>
                <CartProduct item={item} />
              </li>
            ))}
          </div>
          <PriceDetails />
        </div>
      ) : (
        <div className=" h3 txt-c ">Your cart is empty!</div>
      )}
      <ToastContainer autoClose={1000}/>
    </>
  );
};
export { Cart };
