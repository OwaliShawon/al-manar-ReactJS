import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../About/Aboout.css"
import logo from "../../assets/intig.png"

const About = () => {
    return (
        <section id='about' className='mt-5'>
            <h1 data-aos="fade-up" data-aos-duration="2000">ABOUT US</h1>
            <Container className="main" data-aos="fade-right" data-aos-duration="2000">
                <Row className="service-row">
                    <Col className="service">
                        <div className="service-logo">
                            <img src={logo}></img>
                            <hr className="line"></hr>
                        </div>
                        <h4>ADVANCE TECHNOLOGY</h4>
                        <p>eleifend magna nec venenatis. Mauris mattis velit sit amet odio condimentum dapibus. Suspendisse efficitur sapien condimentum nibh pretium tempus. Suspendisse finibus facilisis turpis at aliquet. Donec pulvinar tortor sed rhoncus faucibus. Donec mauris nibh, tempor ac sollicitudin nec, interdum a sem. </p>
                        {/* <div className="shadowOne"></div>
                        <div className="shadowTwo"></div> */}
                    </Col>

                    <Col className="service">
                        <div className="service-logo">
                            <img src={logo}></img>
                        </div>
                        <h4>ADVANCE TECHNOLOGY</h4>
                        <p> nec venenatis. Mauris mattis velit sit amet odio condimentum dapibus. Suspendisse efficitur sapien condimentum nibh pretium tempus. Suspendisse finibus facilisis turpis at aliquet. Donec pulvinar tortor sed rhoncus faucibus. Donec mauris nibh, tempor ac sollicitudin nec, interdum a sem. </p>
                        {/* <div className="shadowOne"></div>
                        <div className="shadowTwo"></div> */}
                    </Col>

                    <Col className="service">
                        <div className="service-logo">
                            <img src={logo}></img>
                        </div>
                        <h4>ADVANCE TECHNOLOGY</h4>
                        <p> magna nec venenatis. Mauris mattis velit sit amet odio condimentum dapibus. Suspendisse efficitur sapien condimentum nibh pretium tempus. Suspendisse finibus facilisis turpis at aliquet. Donec pulvinar tortor sed rhoncus faucibus. Donec mauris nibh, tempor ac sollicitudin nec, interdum a sem. </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;