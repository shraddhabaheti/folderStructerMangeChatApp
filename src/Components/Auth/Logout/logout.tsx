import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Snackmessages } from "../../../Routes/AppRoute";
import { clearLocalStorage } from "../../../Utils/browserStorage";
import { Button } from 'react-bootstrap'

interface IProps {
    handleCancel: any
}

export const Logout: React.FC<IProps> = ({ handleCancel }) => {
    const navigate = useNavigate();
    const { snackbarShowMessage } = useContext(Snackmessages);
    const handleLogout = () => {
        clearLocalStorage();
        snackbarShowMessage("logout Successfully", "success")
        navigate('/')
    }
    return (
        <>
            <div className="text-center">
                <h2 className='mb-3 fw-bold'>Are you sure to logout</h2>
                <Button variant="outlined" onClick={handleCancel} className="btn outline-btn px-4 me-3">Cancel</Button>
                <Button variant="contained" onClick={handleLogout} className="btn gradient-btn px-5">Yes</Button>
            </div>
        </>
    )
}
