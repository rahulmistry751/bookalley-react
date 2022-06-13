import style from './Profile.module.css';
import { useAuth } from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context';
import { USER_ACTIONS } from '../../utils';
const Profile=()=>{
    const navigate=useNavigate();
    const {userDetails,setUserDetails,setUserToken}=useAuth();
    const {productDispatch}=useProduct();
    const logoutHandler=()=>{
        setUserDetails('');
        setUserToken('');
        productDispatch({type:USER_ACTIONS.LOGOUT})
        localStorage.removeItem('loginDetails');
        navigate("/")
    }
    return(
        <div className={`${style['profile-container']}`}>
            <div className={`${style['profile']}`}>
                <div className="user-details mgb-16">
                <p className={`${style['user-name']}`}>
                    {userDetails.firstName} {userDetails.lastName}
                </p> 
                <small className='user-email'>{userDetails.email}</small>

                </div>
                <button className='button' onClick={logoutHandler}>Logout</button>
            </div>
            
        </div>
    )
}
export {Profile};