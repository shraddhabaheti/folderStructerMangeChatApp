
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CircularProgress, Fab } from '@mui/material'
import { AccountCreationData, Login, User } from '../../../Interfaces/userinterface'
import { loginValidation, signUpValidation } from '../../../Utils/validation'
import { accountCreationServices, loginServices } from '../../../Services/authServices'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import fgg from '../../../Assets/image/eye.png'
import fgg1 from '../../../Assets/image/eye1.svg'
import './accountCreation.css'
let initialState: AccountCreationData = {
    name:'',
    email: '',
    phone:'',
    password: ''
}
interface IProps{
    setIsLoading: any
    handleOpenModel?: any
}
export const AccountCreationComponent:React.FC<IProps> = () => {
    const [user, setUser] = useState<AccountCreationData>(initialState);
    const [errorMessages, setErrorMessages] = useState<User>({});
    const [loading, setLoading] = useState(false)
    const [ispasswordShow,setIsPasswordShow]=useState<boolean>(false);
    const toggleSubmit=()=>{
        setIsPasswordShow(!ispasswordShow);
    }
    let handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
       
        try {
            e.preventDefault();
            let { errors, isValid } = signUpValidation(user)
            setErrorMessages(errors)
            if (isValid) {
                setLoading(true)
                const response: any = await accountCreationServices(user)
                if (response.status === 200) {
                    setLoading(false);
                    setIsPasswordShow(false)
                } else if (response.status === 400) {
                    setLoading(false)
                   setIsPasswordShow(false)
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
        const { errors } = signUpValidation(newData)
        setErrorMessages({
            ...errorMessages,
            ...errors,

        })


    }
    return (
        <>
            <form action="" className="p-4" id="sign-in" onSubmit={handleSignUp}>
                <div className="row">
                    <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <div className='form-group mb-3'>
                            <label className='form-label text-white'>Name</label>
                            <input type="text"
                                 name="name"
                                 value={user.name}
                                 className="form-control"
                                placeholder="Enter Your name "
                                onChange={handleChange}/>
                             <span className="text-danger">{errorMessages.name}</span>
                             </div>
                             <div className='form-group mb-3'>
                            <label className='form-label text-white'>phone</label>
                            <input type="text"
                                 name="phone"
                                 value={user.phone}
                                 className="form-control"
                                placeholder="Enter Your name "
                                onChange={handleChange}/>
                             <span className="text-danger">{errorMessages.phone}</span>
                             </div>
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
                                type={ispasswordShow?"text":'password' }
                                name="password"
                                value={user.password}
                                className="form-control"
                                placeholder="******"
                                onChange={handleChange}
                            />
                           {
                             ispasswordShow ?<RemoveRedEyeIcon onClick={toggleSubmit}/>:<VisibilityOffIcon onClick={toggleSubmit}/>
                           }
                     
                            <span className="text-danger">{errorMessages.password}</span>

                        </div>
                        <div className='button-'>

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
                                        : "signup"
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )

}

