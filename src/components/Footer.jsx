import React from "react";
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Footer = () => {
    return (  
        <div>
            <Navbar bg="dark" expands="lg" variant="dark">
				<Container fluid>
                    <Navbar.Brand href="index.html"> <i className="bi bi-house-door-fill display-7"></i> </Navbar.Brand>
                    <Navbar.Brand href="index.html"> <i className="bi bi-facebook display-7"></i> </Navbar.Brand>
                    <Navbar.Brand href="index.html"> <i className="bi bi-instagram display-7"></i> </Navbar.Brand>
                    <Navbar.Brand href="index.html"> <i className="bi bi-twitter display-7"></i> </Navbar.Brand>
                    <Navbar.Brand href="https://developer.themoviedb.org/" className="display-7"> About </Navbar.Brand>
                    <Navbar.Brand href="index.html" className="display-7"> Copyrights </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                </Container>
            </Navbar>
        </div>
    );
}
 
export default Footer;