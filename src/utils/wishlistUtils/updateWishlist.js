import { PRODUCT_ACTIONS } from "../constants";
const updateWishlist = (productDispatch, wishlist) => {
  productDispatch({
    type: PRODUCT_ACTIONS.UPDATE_WISHLIST,
    payload: { wishlist:wishlist },
  });
};
export { updateWishlist };
