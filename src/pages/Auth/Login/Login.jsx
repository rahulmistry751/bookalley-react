import "../auth.css";
import React,{useEffect,useState} from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
const testCredential={
  "email":"testcred@gmail.com",
  "password":"Test1234"
}
const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const [loginCredential,setLoginCredential]=useState({email:"",password:""})
  const {loginHandler,authError,userToken}=useAuth();
  const loginTestCredentails=()=>{
    setLoginCredential({email:testCredential.email,password:testCredential.password})
  }
  const changeHandler=(e)=>{
  const {name,value}=e.target;
    setLoginCredential({...loginCredential,[name]:value})
  }
const submitHandler=(e)=>{
  e.preventDefault();
  loginHandler(loginCredential);
}
  useEffect(()=>{
    if(userToken){
      navigate(location.state?.from?.pathname || '/',{replace:true})
    }

  },[userToken])
  return (
    <div className="auth login">
      <div className="card text-only card-login">
        <div className="card-header h3 fw-600 mg-16 txt-c">Log in to BookAlley</div>
        <div className="card-content txt-l">
          <form action="" onSubmit={submitHandler}>
            <div className="login-username">
              <label htmlFor="email" className="control-label gray fs-12">
                Email
              </label>
              <input
                value={loginCredential.email}
                type="text"
                className="input form-control"
                id="email"
                name="email"
                required
                onChange={(e)=>changeHandler(e)}
              />
            </div>
            <div className="login-password">
              <label htmlFor="password" className="control-label gray fs-12">
                Password
              </label>
              <input
                value={loginCredential.password}
                type="password"
                className="input form-control"
                id="password"
                name="password"
                autoComplete="off"
                required
                onChange={(e)=>changeHandler(e)}
              />
            </div>
            {authError && <div className="error">{authError}</div>}
            {
              <div className="primary-action txt-c">
              <button className="button button-full mgb-16" type="submit" onClick={loginTestCredentails}>
                Use test credential
              </button>
            </div>
            }
            <div className="primary-action txt-c">
              <button className="button button-full" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="create-account">
        <span>New to BookAlley? </span>
        <Link to="/signup" className="fw-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export { Login };
