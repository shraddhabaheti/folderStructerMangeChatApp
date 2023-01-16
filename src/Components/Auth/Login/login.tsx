import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { CircularProgress } from '@mui/material'
import { Login } from '../../../Interfaces/userinterface'
import { loginValidation } from '../../../Utils/validation'
import { loginServices } from '../../../Services/authServices'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Snackmessages } from '../../../Routes/AppRoute'
import { setItemLocalStorage } from '../../../Utils/browserStorage'
import { useNavigate } from 'react-router-dom'
import { MAINMENU } from '../../../Routes/RouteConstent'

let initialState: Login = {
    email: '',
    password: ''
}
interface IProps {
    setIsLoading: any
    handleOpenModel?: any
}
export const LoginComponent: React.FC<IProps> = () => {
    const [user, setUser] = useState<Login>(initialState);
    const [errorMessages, setErrorMessages] = useState<Login>({});
    const [loading, setLoading] = useState(false)
    const [showIspassword, setShowisPassword] = useState<boolean>(false)
    const snackbarShowMessage = useContext(Snackmessages);
    const navigate = useNavigate();
    const toggleIspassword = () => {
        setShowisPassword(!showIspassword);
    }
    let handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {

        try {
            e.preventDefault();
            let { errors, isValid } = loginValidation(user)
            setErrorMessages(errors)
            if (isValid) {

                setLoading(true)
                const response: any = await loginServices(user)
                if (response.status === 200) {

                    // snackbarShowMessage(response.data.message, "success");

                    setItemLocalStorage("token", JSON.stringify(response.data.data.token))
                    setLoading(false);
                    navigate(`/${MAINMENU}`)
                    snackbarShowMessage("Login successfull", "success");

                } else if (response.status === 400) {
                    // snackbarShowMessage(response.data.message,  "error");
                    setLoading(false)
                    snackbarShowMessage("Please check Email or Password", "error")
                }
            }

        } catch (error) {
            console.log(error)

        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        let newData = { [name]: value };
        setUser({
            ...user,
            [name]: value
        })
        const { errors } = loginValidation(newData)
        setErrorMessages({
            ...errorMessages,
            ...errors,

        })


    }
    return (
        <>
            <form action="" className="p-4" id="sign-in" onSubmit={handleLogin}>
                <div className="row">
                    <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <div className="form-group mb-3">
                            <label
                                className="form-label text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                className="form-control"
                                placeholder="Enter Your Email Address"
                                onChange={handleChange}
                            />
                            <span className="text-danger">{errorMessages.email}</span>

                        </div>
                        <div className="form-group mb-3">
                            <label
                                className="form-label text-white">
                                Password
                            </label>
                            <input
                                type={showIspassword ? 'text' : "password"}
                                name="password"
                                value={user.password}
                                className="form-control"
                                placeholder="******"
                                onChange={handleChange}
                            />
                            {
                                showIspassword ? <VisibilityOffIcon onClick={toggleIspassword} /> : <RemoveRedEyeIcon onClick={toggleIspassword} />
                            }
                            <span className="text-danger">{errorMessages.password}</span>

                        </div>

                        <div className="button-group mt-4 text-center">
                            <Button
                                variant="info"
                                className="btn sign-in-btn gradient-btn w-100 px-5"
                                type="submit"
                                disabled={loading}
                            >
                                {
                                    loading
                                        ? <><CircularProgress color="inherit" /> loading... </>
                                        : "Login"
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )

}

