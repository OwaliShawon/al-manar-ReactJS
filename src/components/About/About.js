import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../About/Aboout.css"
import logo from "../../assets/intig.png"

const About = () => {
    return (
        <div>
            <Container className="main">
                <Row className="service-row">
                    <Col md="3" className="service">
                        <div className="service-logo">
                        <img src={logo}></img>
                        </div>
                        <h4>ADVANCE TECHNOLOGY</h4>
                        <p>Phasellus suscipit auctor dolor, eget iaculis risus lacinia sed. Sed faucibus pellentesque lacus, vitae fermentum justo ultrices vel. Vivamus consectetur eleifend magna nec venenatis. Mauris mattis velit sit amet odio condimentum dapibus. Suspendisse efficitur sapien condimentum nibh pretium tempus. Suspendisse finibus facilisis turpis at aliquet. Donec pulvinar tortor sed rhoncus faucibus. Donec mauris nibh, tempor ac sollicitudin nec, interdum a sem. </p>
                        <div className="shadowOne"></div>
                        <div className="shadowTwo"></div>
                    </Col>     
                    
                    <Col md="3" className="service">
                        <div className="service-logo">
                        <img src={logo}></img>
                        </div>
                        <h4>ADVANCE TECHNOLOGY</h4>
                        <p>Phasellus suscipit auctor dolor, eget iaculis risus lacinia sed. Sed faucibus pellentesque lacus, vitae fermentum justo ultrices vel. Vivamus consectetur eleifend magna nec venenatis. Mauris mattis velit sit amet odio condimentum dapibus. Suspendisse efficitur sapien condimentum nibh pretium tempus. Suspendisse finibus facilisis turpis at aliquet. Donec pulvinar tortor sed rhoncus faucibus. Donec mauris nibh, tempor ac sollicitudin nec, interdum a sem. </p>
                        <div className="shadowOne"></div>
                        <div className="shadowTwo"></div>
                    </Col> 

                    <Col md="3" className="service">
                    <div className="service-logo">
                    <img src={logo}></img>
                    </div>
                    <h4>ADVANCE TECHNOLOGY</h4>
                    <p>Phasellus suscipit auctor dolor, eget iaculis risus lacinia sed. Sed faucibus pellentesque lacus, vitae fermentum justo ultrices vel. Vivamus consectetur eleifend magna nec venenatis. Mauris mattis velit sit amet odio condimentum dapibus. Suspendisse efficitur sapien condimentum nibh pretium tempus. Suspendisse finibus facilisis turpis at aliquet. Donec pulvinar tortor sed rhoncus faucibus. Donec mauris nibh, tempor ac sollicitudin nec, interdum a sem. </p>
                    <div className="shadowOne"></div>
                    <div className="shadowTwo"></div>
                    </Col> 
                </Row>
                
            </Container>
        </div>
    );
};

export default About;