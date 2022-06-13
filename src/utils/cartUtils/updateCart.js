import { PRODUCT_ACTIONS } from "../constants";
const updateCart=(productDispatch,cart)=>{
    productDispatch({
        type: PRODUCT_ACTIONS.UPDATE_CART,
        payload: { cart:cart },
      });
}
export {updateCart};