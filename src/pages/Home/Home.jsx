import React, { useEffect } from "react";
import { Hero, PopularNow } from "../../components";
import { useAuth } from "../../context";
import { toast,ToastContainer } from "react-toastify";
const Home = () => {
  const {userDetails,setUserDetails}=useAuth();
  useEffect(()=>{
      if(userDetails.currentpaymentID){
        toast.success("Order was successful🎉")
        setUserDetails({...userDetails,currentpaymentID:""});
      }
  },[])
  return (
    <>
      <Hero />
      <PopularNow />
      <ToastContainer autoClose={1000}/>
    </>
  );
};
export { Home };
