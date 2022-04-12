import { PRODUCT_ACTIONS } from "../constants";
const removeFromWishlist = (productDispatch, item) => {
  return productDispatch({
    type: PRODUCT_ACTIONS.REMOVE_FROM_WISHLIST,
    payload: { product: item },
  });
};
export { removeFromWishlist };
