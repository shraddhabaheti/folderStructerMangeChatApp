import { Snackbar } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react"
import { Alert } from "react-bootstrap";

type Severity = 'info'|'success'|'warning'|'danger'
export const withSnackbar=(WrappedComponent:any)=>{
    return(props:any)=>{
        const [open,setOpen]=useState(false);
        const[message,setMessage]=useState("I am custome to message");
        const[duration,setDuration]=useState(2000);
       const [severity,setSeverity]=useState<Severity>('success');
       const ShowMessage=(message:string,severity:Severity,duration=2000)=>{
          setMessage(message);
          setDuration(duration);
         setSeverity(severity);
         setOpen(true)
         }
         const handleClose=(event:React.SyntheticEvent |Event, reason?:string)=>{
               if(reason === "clickWay"){
                   return;
               }
               setOpen(true)
         };
         return(
             <>
             <WrappedComponent {...props} snackbarShowMessage={ShowMessage}/>
             <Snackbar
             onClose={handleClose}
             autoHideDuration={duration}
              open={open}
            >
             
           
             <Alert variant="filled"
                 onClose={handleClose}
                //  severity={severity}
             >
             {message}
             </Alert>
             </Snackbar>
             </>
         );
     
    };
   
};
export default withSnackbar;