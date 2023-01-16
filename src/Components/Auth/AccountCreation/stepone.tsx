
import React from "react";
import { User } from '../../../Interfaces/userinterface'

interface IProps {
    handleChange: any
    errorMsg: User
    userData: User
}

export const StepOne: React.FC<IProps> = ({ handleChange, errorMsg, userData }) => {
    let d: boolean = false
    return (
        <>
            <div>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center fw-bold mt-2 mb-4">Create Your Registration Account</h3>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1">
                                    Name
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userData.name}
                                    className="form-control"
                                    placeholder="Enter Your First Name"
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{errorMsg.name}</span>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-2">
                                <label className="form-label mb-1">
                                    Email Address
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    className="form-control"
                                    placeholder="Enter Your Email Address"
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{errorMsg.email}</span>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1">
                                    Phone number
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={userData.phone}
                                    className="form-control"
                                    placeholder="Enter Your Phone Number"
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{errorMsg.phone}</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-2">
                                <label
                                    className="form-label mb-1">
                                    Password
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    className="form-control"
                                    placeholder="********"
                                    onChange={handleChange}
                                />
                                <span className="text-danger">
                                    {errorMsg.password}
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
