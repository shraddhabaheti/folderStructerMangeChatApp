import React from "react"
import { Button } from "react-bootstrap"
import { LOGIN, MAINMENU } from "../../Routes/RouteConstent"
import { Link } from "react-router-dom"
export const MainMenu: React.FC = () => {
    return (
        <>
            <div>
                <div className="container landing-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center fw-bold mt-4 mt-md-3 mt-lg-4">SELECT ONE OF THE CHOOSE OPTIONS</h1>
                        </div>
                    </div>

                    <div className="row modify my-3 my-md-4 mt-lg-4 mb-lg-5">
                        <div className="col-md-4 text-center">
                            <Link to={`/${LOGIN}`} className="text-decoration-none d-flex align-items-center justify-content-center gradient-btn mb-4 mb-md-0 p-5 py-md-5 px-md-3">
                                <h4 className="fw-bold mb-0">Modify Account</h4>
                            </Link>
                        </div>

                        <div className="col-md-4 text-center">
                            <Link to="#" className="text-decoration-none d-flex align-items-center justify-content-center option-gradient mb-4 mb-md-0 p-5 py-md-5 px-md-3">
                                <h4 className="fw-bold mb-0">My Scores</h4>
                            </Link>
                        </div>

                        <div className="col-md-4 text-center">
                            <Link to={`/${MAINMENU}`} className="text-decoration-none d-flex align-items-center justify-content-center gradient-btn mb-4 mb-md-0 p-5 py-md-5 px-md-3">
                                <h4 className="fw-bold mb-0">My Reservations</h4>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Button
                                variant="contained"
                                className="btn fw-bold btnMenu gradient-btn w-100 py-3 py-md-2 px-4 px-md-5"

                            >
                                Book a New Reservation
                            </Button>
                        </div>
                    </div>

                    {/* <div className="row">
                    <div className="offset-md-6 col-md-6">
                        <div className="back text-start position-relative">
                            <img src={Bg_logo} width="100%" className="position-absolute"></img>
                        </div>
                    </div>
                </div> */}
                </div>


            </div>
        </>
    )

}