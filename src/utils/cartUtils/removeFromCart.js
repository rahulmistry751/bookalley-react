import { PRODUCT_ACTIONS } from "../constants";
const removeFromCart = (productDispatch, item) => {
  return productDispatch({
    type: PRODUCT_ACTIONS.REMOVE_FROM_CART,
    payload: { product: item },
  });
};
export { removeFromCart };
