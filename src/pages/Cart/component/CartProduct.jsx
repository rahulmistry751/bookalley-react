import { useProduct } from "../../../context/product-context";
import {
  removeFromCart,
  moveToWishlist,
  PRODUCT_ACTIONS,
} from "../../../utils";
import "../Cart.css";
const CartProduct = ({ item }) => {
  const { productDispatch } = useProduct();
  return (
    <div className="card card-hori">
      <div className="card-image">
        <img src={item.img} alt="" className="card-img" />
      </div>
      <div className="card-content cart-content txt-l">
        <div className="card-header cart-header">
          <h4 className="book-heading h3 fw-600">{item.title}</h4>
          <p className="book-subheading gray">By {item.author}</p>
          <div className="price-rating">
            <div className="price">
              <span className="dis-price">₹{item.discountPrice}</span>
              <span className="real-price">₹{item.originalPrice}</span>
              <div className="percent gray mgt-16">
                {item.discountPercent}% off
              </div>
            </div>
            <div className="rating">
              <i className="fas fa-star star-rating mgt-16"></i>
              {item.rating}
            </div>
            <div className="qty">
              <button className="button button-sm">
                <i
                  className="fas fa-minus"
                  onClick={() =>
                    productDispatch({
                      type: PRODUCT_ACTIONS.DECREASE_QTY,
                      payload: {
                        product: item,
                      },
                    })
                  }
                ></i>
              </button>
              <input
                type="text"
                value={item.quantity}
                className="input-qty txt-c"
                min="1"
                max="50"
                readOnly
              />
              <button className="button button-sm">
                <i
                  className="fas fa-plus"
                  onClick={() =>
                    productDispatch({
                      type: PRODUCT_ACTIONS.INCREASE_QTY,
                      payload: {
                        product: item,
                      },
                    })
                  }
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer cart-footer">
          <button
            className="button button-full mgb-16"
            onClick={() => removeFromCart(productDispatch, item)}
          >
            Remove from cart
          </button>
          <button
            className="button button-outlined button-full"
            onClick={() => moveToWishlist(productDispatch, item)}
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export { CartProduct };
