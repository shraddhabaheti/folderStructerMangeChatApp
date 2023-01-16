import {  Navigate,Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header/header";
import { isLogin } from "../Utils/Auth"

export const PrivateRoute=()=>{
  const userLogin=isLogin()
  
    return(
         <>
           
       {
        userLogin 
        ? <>
            <Header />
            <Outlet />
          </>
        :<Navigate to="/" />
      }
    
        </>
    )
}