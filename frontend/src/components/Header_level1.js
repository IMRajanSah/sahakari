import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import {  NavLink } from 'react-router-dom';
const Company_Header = () => {
  
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="">Sanstha LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav>
                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        

    </div>
  )
}

export default Company_Header