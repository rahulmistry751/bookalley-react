import axios from 'axios';
const cartServices=()=>{

    const getUserCartFromServer=async (token)=>{
        try{
            const response=await axios.get('/api/user/cart',{headers:{authorization:token}})
            return response
        }
        catch(error){
            console.error(error);
        }
        
    }
    const addToCartInServer=async(token,product)=>{
        try{
            const response=await axios.post('/api/user/cart',{product},{headers:{authorization:token}})
            return response
        }
        catch(error){
            console.error(error)
        }
    }
    const removeCartProductFromServer=async(token,product)=>{
        try{
            const response=await axios.delete(`/api/user/cart/${product._id}`,{headers:{authorization:token}})
            return response
        }
        catch(error){
            console.error(error)
        }
    }
    return {getUserCartFromServer,addToCartInServer,removeCartProductFromServer}
}
export {cartServices};