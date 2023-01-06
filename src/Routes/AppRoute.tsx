import { Screenshot } from "@mui/icons-material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as navigate from './RouteConstent'
import * as Screens from '../Container'

export const RouteComponent=()=>{
    return(
        <BrowserRouter>
         <Routes>
         <Route path={navigate.Login} element={<Screens.Login/>} />
         <Route path={navigate.HOME} element={<Screens.LandingPage />} />
         </Routes>
        </BrowserRouter>
    )
}
export const AppRoutes = (RouteComponent);