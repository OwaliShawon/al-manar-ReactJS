import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../NavTop/NavTop.css"
import Menu from '../Menu/Menu';
import { gsap } from "gsap";

const NavTop = () => {


    return (
        <div className="sticky-top">
            <Menu></Menu>
            {/* <!-- Navigation -->*/}
            <Navbar bg="light" expand="lg" >
                <Container className="menu" >
                    {/* <Navbar.Brand href="#home">AL-MANAR GROUP</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-items mx-auto pt-2" variant="tabs" >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link1">Link</Nav.Link>
                            <Nav.Link href="#link2">Link</Nav.Link>
                            <Nav.Link href="#link3">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavTop;