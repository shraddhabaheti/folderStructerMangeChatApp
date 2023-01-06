import { Login } from '@mui/icons-material';
import React from 'react';
import './App.css';
import { AppRoutes } from './Routes/AppRoute';


function App() {
  return (
    <div className="App" style={{background:"lightgray",overflow:"hidden"}}>
         {/* <LoginComponent/> */}
        <AppRoutes/>
    </div>
  );
}

export default App;
