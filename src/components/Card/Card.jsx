import { useProduct } from "../../context/product-context";
import { addToWishlist, removeFromWishlist } from "../../utils";
import "./Card.css";
const Card = ({ item }) => {
  const { productDispatch, wishlist } = useProduct();
  let isWishlisted = wishlist.find(
    (wishlistitem) => wishlistitem._id === item._id
  );
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={item.img} alt="" className="card-img" />
        <i
          className={`fas fa-bookmark card-like ${
            isWishlisted ? "wishlist-like" : ""
          }`}
          onClick={() => {
            isWishlisted
              ? removeFromWishlist(productDispatch, item)
              : addToWishlist(productDispatch, item);
          }}
        ></i>
      </div>

      <div className="card-content txt-l">
        <div className="card-header book-header">
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
          </div>
        </div>
        <div className="card-footer">
          <button className="button button-full">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export { Card };
