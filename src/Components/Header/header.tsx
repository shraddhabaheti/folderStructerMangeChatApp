import React, { createElement, useState } from "react"
import { CustomizedModel } from "../CustomizedModel/customizedModel";
import { Logout } from '../Auth/Logout/logout'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { style } from "@mui/system";
import LogoutIcon from '@mui/icons-material/Logout';
//maruee Tag are used to text
//  let mar=React.createElement(
//     "marquee",{style: { color: "green",direction:"up"} ,},"html tyhjtguhjyuhki"
//   )
//marquee tag are used to image
// let img:any = React.createElement("img",{src: 'https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg', height: "200px",  width: "300px"});
// let demo = React.createElement("marquee",{ color: "green",direction:"up"},img);

const Header: React.FC = () => {
  const [openModel, setOpenModel] = useState(false);
  const logoutModel = (e: React.MouseEvent<HTMLElement>) => {
    setOpenModel(true)
  }



  const closeModel = () => setOpenModel(false);

  return (
    <>
      {/* { demo } */}
      {/* {mar} */}
      <Navbar bg="primary" variant="dark" style={{ padding: "20px" }}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav.Link href="#pricing">  <a className="mt-5 text-white text-align-right" onClick={logoutModel} ><LogoutIcon /></a></Nav.Link>
        </Container>
      </Navbar>
      <div className='container'>
        <div className="row">


          <div className="col-lg-12">
            <div className="topbar-option text-start mt-3 d-flex align-items-center justify-content-between">

              {/* <img src={Header_logo} width="100" onClick={()=>{navigate('/')}}></img> */}
              <div className="button-group mt-4 text-center">
                {/* {location.pathname !== `/${MAINMENU}` && location.pathname !== `/${MODIFYACCOUNT}`
                  ? <Button variant="contained" onClick={()=>{navigate(`/${MODIFYACCOUNT}`)}} className="btn text-capitalize gradient-btn px-4 fw-bold me-4">
                    My Player Page
                    </Button>
                  : null} */}
                {/* <a className="fw-bold text-decoration-none text-danger  " onClick={logoutModel}><LogoutIcon/></a> */}

              </div>
            </div>
          </div>
        </div>
      </div>
      {
        openModel &&
        <CustomizedModel
          open={openModel}
          title={"Logout"}
          isClose={true}
          handleClose={closeModel}
        >
          <Logout
            handleCancel={closeModel}
          />
        </CustomizedModel>
      }
    </>
  )

}
export default Header;