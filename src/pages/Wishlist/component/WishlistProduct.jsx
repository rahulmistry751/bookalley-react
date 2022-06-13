import { useLocation, useNavigate } from "react-router-dom";
import { useProduct,useAuth } from "../../../context";
import { useWishlistServices,useCartServices } from "../../../hooks";
import "../Wishlist.css";
const WishlistProduct = ({ item }) => {
  const navigate=useNavigate();
  const location=useLocation();
  const {wishlist } = useProduct();
  const {addToWishlistLocally,removeWishlistProductLocally}=useWishlistServices();
  const {addToCartLocally}=useCartServices();
  const {userToken}=useAuth();
  let isWishlisted = wishlist.find(
    (wishlistitem) => wishlistitem._id === item._id
  );
  const addToWishlistHandler=()=>{
    if(userToken){
      if(isWishlisted){
        removeWishlistProductLocally(item)
      }
      else
        addToWishlistLocally(item)
    }
    else{
      navigate('/login',{state:{from:location}})
    }
  }
  const moveToCartHandler=()=>{
    addToCartLocally(item);
    removeWishlistProductLocally(item)
  }
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={item.img} alt="" className="card-img" />
        <i
          className={`fas fa-bookmark card-like ${
            isWishlisted ? "wishlist-like" : ""
          }`}
          onClick={addToWishlistHandler}
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
              <i className="fas fa-star star-rating mgt-16"></i>4.5
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="button button-full"
            onClick={moveToCartHandler}
          >
            Move to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export { WishlistProduct };
