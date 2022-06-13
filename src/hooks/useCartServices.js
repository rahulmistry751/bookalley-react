import { useProduct,useAuth } from "../context";
import { cartServices } from "../services";
import { updateCart,addToCart,removeFromCart } from "../utils";
const useCartServices=()=>{
    const {productDispatch}=useProduct();
    const {userToken}=useAuth();
    const {getUserCartFromServer,addToCartInServer,removeCartProductFromServer}=cartServices();
    const updateCartLocally=async()=>{
        const response=await getUserCartFromServer(userToken)
        updateCart(productDispatch,response.data.cart)
    }
    const addToCartLocally=async(product)=>{
        const response=await addToCartInServer(userToken,product)
        addToCart(productDispatch, product)
    }
    const removeCartProductLocally=async(product)=>{
        const response=await removeCartProductFromServer(userToken,product)
        removeFromCart(productDispatch,product)
    }
    return({updateCartLocally,addToCartLocally,removeCartProductLocally})
}
export {useCartServices}