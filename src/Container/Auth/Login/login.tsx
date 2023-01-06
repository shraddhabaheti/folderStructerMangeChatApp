import { useState } from "react"
import { LoginComponent } from "../../../Components/Auth/Login/login";
import { CustomizedModel } from "../../../Components/CustomizedModel/customizedModel";
import { LoadingScreen } from "../..";

export const Login:React.FC=()=>{
    const [openModel, setOpenModel] = useState(true)
    const[isLoading,setIsLoading]=useState(false);
    const handleOpenModel=()=>setOpenModel(true)
    return(
        <>
       {
           isLoading 
           ?
           <LoadingScreen 
           title={"Welcome Shop 😎"}
           subtitle={"please offer to sale"}
           loadingtext={"Please Wait..Loading Screen"}
           
           />
           :
           <CustomizedModel  
           open={openModel}
           handleClose={handleOpenModel}
           title={"Login To Your Account"}
           isClose={true}
           
           >
         <LoginComponent setIsLoading={setIsLoading}/>
        </CustomizedModel>
         
      }
        </>
    )

}