import { USER_ACTIONS } from "../constants"

const clearCart=(productDispatch)=>{
    return productDispatch({type:USER_ACTIONS.CLEAR_CART})
}
export {clearCart}