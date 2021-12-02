import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import "./Menu.css"
import logo from  "../../assets/intig.png"

const Menu = () => {
    return (
        <div className="main-menu">
              
            <Container fluid className="sub-menu">
                <Row className="logo-upper">
                    <Col md="1"></Col>
                
                    <Col md="4"> 
                        <address>
                            <a href="tel:+13115552368"> (311) 555-2368 </a> 
                                &nbsp; &nbsp;
                            <a href="mailto:jim@rock.com">jim@rock.com</a>
                        </address>
                    </Col>

                    <Col md="3"></Col>

                    <Col md="4">
                    <img  src={logo} width="35"></img>
                    &nbsp; &nbsp;
                    <img  src={logo} width="35"></img>
                    &nbsp; &nbsp;
                    <img  src={logo} width="35"></img>
                    &nbsp; &nbsp;
                    <img  src={logo} width="35"></img>
                    </Col>
                </Row>
            </Container>




            
            <Navbar bg="light" expand="lg" >
            <Container fluid>
              <Navbar.Brand href="#">
              <img src = {logo} width="60" height="40"></img>
                     &nbsp; Al Manar
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 justify-content-end"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">HOME</Nav.Link>
                  <Nav.Link href="#action2">ABOUT</Nav.Link>
                  <Nav.Link href="#action6">PROJECT</Nav.Link>

                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Menu;