import { PRODUCT_ACTIONS } from "../constants";
const addToWishlist = (productDispatch, item) => {
  productDispatch({
    type: PRODUCT_ACTIONS.ADD_TO_WISHLIST,
    payload: { product: item },
  });
};
export { addToWishlist };
