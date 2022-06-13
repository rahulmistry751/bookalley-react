import { useProduct,useAuth } from "../context"
import { wishlistServices } from "../services";
import { addToWishlist, removeFromWishlist, updateWishlist} from "../utils";
const useWishlistServices=()=>{
    const {productDispatch}=useProduct();
    const {userToken}=useAuth();
    const {getUserWishlistFromServer,addToWishlistInServer,removeWishlistProductFromServer}=wishlistServices();
    const updateWishlistLocally=async()=>{
        const response=await getUserWishlistFromServer(userToken)
        updateWishlist(productDispatch,response.data.wishlist)
    }
    const addToWishlistLocally=async(product)=>{
        const response=await addToWishlistInServer(userToken,product)
        addToWishlist(productDispatch,product)  
    }
    const removeWishlistProductLocally=async(product)=>{
        const response=await removeWishlistProductFromServer(userToken,product)
        removeFromWishlist(productDispatch,product)
    }
    return({updateWishlistLocally,addToWishlistLocally,removeWishlistProductLocally})
}
export {useWishlistServices}