import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import "./Menu.css"
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/al-manar-small.png"

const Menu = () => {
  return (
    <div className="main-menu">
      <Container fluid className="sub-menu">
        <Row className="logo-upper">
      

          <Col md="4">
            <address>
              <a href="tel:+13115552368" className="address"><FontAwesomeIcon icon={faPhone}/>  (311) 555-2368 </a>
              &nbsp; &nbsp;
              <a href="mailto:jim@rock.com" className="address"><FontAwesomeIcon icon={faAt}/>  jim@rock.com</a>
            </address>
          </Col>

          <Col md="4" className="address-img"><img src={logo}  height="40px"></img></Col>

          <Col md="4">
          <a href="#" className="address"><FontAwesomeIcon icon={faFacebook}/></a>
            &nbsp; &nbsp;
            <a href="#" className="address"><FontAwesomeIcon icon={faTwitter}/></a>
            &nbsp; &nbsp;
            <a href="#" className="address"><FontAwesomeIcon icon={faLinkedin}/></a>
            &nbsp; &nbsp;
            <a href="#" className="address"><FontAwesomeIcon icon={faGithub}/></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;