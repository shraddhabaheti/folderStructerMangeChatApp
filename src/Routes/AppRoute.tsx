import { Screenshot } from "@mui/icons-material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as navigate from './RouteConstent'
import * as Screens from '../Container'
import { withSnackbar } from '../Components/Snackbar/snackbar'
import { createContext } from "react"
import { PublicRouter } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { Snackbar } from "@mui/material"



export const Snackmessages = createContext<any>(null)
interface IProps {
  snackbarShowMessage: () => {}
}


export const RouteComponent: React.FC<IProps> = ({ snackbarShowMessage }) => {

  return (
    <Snackmessages.Provider value={{ snackbarShowMessage }}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRouter />}>
            <Route path={navigate.LOGIN} element={<Screens.Login />} />
            <Route path={navigate.HOME} element={<Screens.LandingPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={navigate.MAINMENU} element={<Screens.MainMenu />}></Route>
            <Route path={navigate.PostData} element={<Screens.PostData />}></Route></Route>
        </Routes>
      </BrowserRouter>
    </Snackmessages.Provider>
  )
}
export const AppRoutes = withSnackbar(RouteComponent);