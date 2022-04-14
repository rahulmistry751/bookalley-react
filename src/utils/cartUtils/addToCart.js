import { PRODUCT_ACTIONS } from "../constants";
const addToCart = (productDispatch, item) => {
  return productDispatch({
    type: PRODUCT_ACTIONS.ADD_TO_CART,
    payload: { product: item },
  });
};
export { addToCart };
