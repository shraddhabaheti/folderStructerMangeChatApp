import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type Severity = "error" | "warning" | "info" | "success"

export const withSnackbar = (WrappedComponent:any) => {
   return (props:any) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("I'm a custom snackbar");
    const [duration, setDuration] = useState(2000);
    const [severity, setSeverity] = useState<Severity>(
      "success"
    ); 

    const showMessage = (message : string, severity : Severity, duration = 2000) => {
      setMessage(message);
      setSeverity(severity);
      setDuration(duration);
      setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    return (
      <>
        <WrappedComponent {...props} snackbarShowMessage={showMessage} />
        <Snackbar
          autoHideDuration={duration}
          open={open}
          onClose={handleClose}
        >
          <Alert variant="filled" 
            onClose={handleClose} 
            severity={severity}
          >
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };
};

export default withSnackbar;
