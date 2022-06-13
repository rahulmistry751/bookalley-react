import axios from 'axios';
const wishlistServices=()=>{
    const getUserWishlistFromServer=async (token)=>{
        try{
            const response=await axios.get('/api/user/wishlist',{headers:{authorization:token}})
            return response
        }
        catch(error){
            console.error(error);
        }
        
    }
    const addToWishlistInServer=async(token,product)=>{
        try{
            const response=await axios.post('/api/user/wishlist',{product},{headers:{authorization:token}})
            return response
        }
        catch(error){
            console.error(error)
        }
    }
    const removeWishlistProductFromServer=async(token,product)=>{
        try{
            const response=await axios.delete(`/api/user/wishlist/${product._id}`,{headers:{authorization:token}})
            return response
        }
        catch(error){
            console.error(error)
        }
    }
    return {getUserWishlistFromServer,addToWishlistInServer,removeWishlistProductFromServer}
}
export {wishlistServices}