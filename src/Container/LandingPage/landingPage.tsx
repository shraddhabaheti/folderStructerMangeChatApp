import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  CustomizedModel,
  AccountCreationComponent,
  LoginComponent,
  LoadingScreen,

} from "../../Components";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../Assets/image/fgg.jpg';
import man from '../../Assets/image/n.jpg';
export const LandingPage: React.FC = () => {
  const [openModel, setOpenModel] = useState(false);
  const [modelName, setModelName] = useState("Account Creation");
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModel = (name: string) => {
    setModelName(name);
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
    // setAccountCreationScreenStep(1);
  };

  const handleChildren = () => {
    switch (modelName) {
      case "Account Creation":
        return (
          <AccountCreationComponent
            setIsLoading={setIsLoading}
            handleOpenModel={handleOpenModel}
          />
        );
      case "Login To Your Account":
        return (
          <LoginComponent
            setIsLoading={setIsLoading}
            handleOpenModel={handleOpenModel}
          />
        );
      case "Back To Login":
        return <div className="text-center">
          <p className="text-center px-md-5 px-0">A Mail has been sent to your email. <br></br> Make sure to verify your email to activate your account.</p>
          <p>Email verified?</p>
          <Button className="gradient-btn" variant="contained"
            onClick={() => setModelName("Login To Your Account")}
          >
            Back to Login
          </Button>
        </div>

      default:
        return (
          <AccountCreationComponent
            setIsLoading={setIsLoading}
            handleOpenModel={handleOpenModel}
          />
        );
    }
  };


  return (
    <>
      {isLoading ? (
        <LoadingScreen
          title={"Welcome Danny 😎"}
          subtitle={"Prepare yourself for a mind-blowing golfing Experience"}
          loadingtext={"Please Wait..Loading Screen"}
        />
      ) : (
        <>
          <div className="container landing-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-start mt-3">
                  {/* <img src={image} width="100"></img> */}
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="landing-page-content my-4 my-md-5 my-lg-0">
                  <h1 className="text-start fw-bold">
                    WELCOME TO  PLAYER PORTAL!
                  </h1>
                  <p className="text-start">
                    Golf & Entertainment is your place for a tech-driven
                    entertainment and golfing experience that is elevating the
                    golf entertainment industries.
                  </p>
                  <div className="button-group text-start">
                    <Button
                      variant="contained"
                      onClick={() => handleOpenModel("Account Creation")}
                      className="btn gradient-btn me-3"
                    >
                      Create Account
                    </Button>

                    <Button
                      variant="outlined"
                      className="btn secondary-btn px-5"
                      onClick={() => handleOpenModel("Login To Your Account")}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7" style={{ background: "black" }}>
                <div className="img-container position-relative">
                  <img src={man} width="130%"></img>

                </div>
              </div>
            </div>
          </div>
          {openModel && (
            <CustomizedModel
              open={openModel}
              handleClose={handleCloseModel}
              title={modelName}
              isClose={modelName !== "" ? true : false}

            >
              {handleChildren()}
            </CustomizedModel>
          )}
        </>
      )}
    </>
  );
};
