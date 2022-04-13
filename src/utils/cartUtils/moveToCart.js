import { removeFromWishlist } from "../wishlistUtils/removeFromWishlist";
import { addToCart } from "./addToCart";
const moveToCart = (productDispatch, item) => {
  addToCart(productDispatch, item);
  removeFromWishlist(productDispatch, item);
};
export { moveToCart };
