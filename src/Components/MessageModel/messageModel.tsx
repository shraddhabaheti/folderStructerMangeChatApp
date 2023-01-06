import { Button } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface Iprops {
    open: boolean
    handleClose: any
    text: string
    here?: string
    message?: string
    reference: any
    onButtonClick?: any
    buttonText: string
}

export const MessageModel: React.FC<Iprops> = ({ open, handleClose, text, message, here, reference, onButtonClick, buttonText }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                container={reference.current}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {text}
                    </Typography>
                    <h6 className="text-center">{message}<a className="fw-bold">{here}</a></h6>
                    <div className="button-group mt-4 text-center">
                        <Button variant="contained" onClick={onButtonClick || handleClose} className="btn text-capitalize gradient-btn px-5 w-50">{buttonText}</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

