import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import "./Menu.css"
import logo from "../../assets/intig.png"

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
            <img src={logo} width="35"></img>
            &nbsp; &nbsp;
            <img src={logo} width="35"></img>
            &nbsp; &nbsp;
            <img src={logo} width="35"></img>
            &nbsp; &nbsp;
            <img src={logo} width="35"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;