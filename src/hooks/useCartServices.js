import { useProduct,useAuth } from "../context";
import { cartServices } from "../services";
import { updateCart,addToCart,removeFromCart, clearCart } from "../utils";
import { toast } from "react-toastify";
const useCartServices=()=>{
    const {productDispatch,cart}=useProduct();
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
    const clearCartLocally=async ()=>{
        cart.forEach(async (product)=>{
            const response=await removeCartProductFromServer(userToken,product)
        })
        clearCart(productDispatch);
    }
    return({updateCartLocally,addToCartLocally,removeCartProductLocally,clearCartLocally})
}
export {useCartServices}