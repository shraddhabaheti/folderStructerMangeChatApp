import { Login } from "@mui/icons-material";
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { isLogin } from "../Utils/Auth"
import { MAINMENU } from "./RouteConstent";

export const PublicRouter = () => {
    const userLogin = isLogin()
    const navigate = useNavigate();
    return (
        <>
            {
                !userLogin ? <Outlet /> : <Navigate to={`/${MAINMENU}`} />
            }
        </>
    )
}