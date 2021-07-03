import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from './drive.png';
import { spacing } from '@material-ui/system';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

export default function NavbarComponent() {


  return (
    <Navbar bg="light" expand="sm"> 
   
      <img src={logo} className="App-logo" alt="logo" width="80" height="80"/>
      <br/>
      <div  className="App-logo">
      <Navbar.Brand as={Link} to="/">
        CloudCHK
      </Navbar.Brand>
      <br/>
      <br/>
      <br/>
      <Nav>
        <Nav.Link as={Link} to="/Profile">
          MyProfil
        </Nav.Link>
      </Nav>
      <br/>
      <br/>
      Stockage disponible: 5Go
    </div>
      <br/>
      <br/>
      MyDrive is a service offered by HCK that allows you to store and share files online. The service was launched on April 30, 2021 and provides 5 GB of free storage. Additional storage can be purchased for a monthly fee.
      <br/>
      <br/>

      
    </Navbar>
  )
}