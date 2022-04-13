import { addToWishlist, removeFromCart } from "../index";
const moveToWishlist = (productDispatch, item) => {
  addToWishlist(productDispatch, item);
  removeFromCart(productDispatch, item);
};
export { moveToWishlist };
