import { CircularProgress } from "@mui/material"
import React from "react"
interface Iprops {
    title?: string,
    subtitle?: string,
    loadingtext?: string
}
export const LoadingScreen: React.FC<Iprops> = ({ title, subtitle, loadingtext }) => {
    return (
        <>
            <div className='vh-100 d-flex align-items-center justify-content-center'>
                <div className='loadingScreen text-center' >
                    <h3 className='fw-bold' >{title}</h3>
                    {
                        subtitle &&
                        <p className="fw-bold my-3">{subtitle}</p>
                    }
                    <h2 className="fw-bold mb-4">{loadingtext}</h2>
                    <CircularProgress color="inherit" />
                </div>
            </div>
        </>
    )
}