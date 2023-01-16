import React from "react"
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import CloseIcon from '@mui/icons-material/Close'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '$body_bg',
    rounded: 20,
    boxShadow: 24,

};


interface IProps {
    open: boolean
    handleClose: () => void
    title: string
    handleBack?: any
    isClose?: boolean
    stepsText?: string
    children: JSX.Element | JSX.Element[]
    className?: string
}

export const CustomizedModel: React.FC<IProps> = ({ open, handleClose, title, handleBack, isClose, stepsText, children, className }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={`${className ? className : ""}`}
            >
                <Box className="modal-pop" style={{ background: 'black' }} sx={style}>
                    <h1 className="main-heading fw-bold m-0 d-flex align-items-center justify-content-between py-2 px-4 text-white">
                        {
                            handleBack &&
                            <ArrowBackIosRoundedIcon onClick={handleBack} />
                        }
                        {
                            isClose &&
                            <CloseIcon onClick={handleClose} />
                        }
                        <span className="modal-heading">
                            {title}
                        </span>

                        <span className="step">{stepsText}</span>
                    </h1>
                    <div className="p-3 p-md-4">
                        {children}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
