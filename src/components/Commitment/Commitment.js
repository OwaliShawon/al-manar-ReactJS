import React from 'react';
import "./Commitment.css"
import logo from "../../assets/al-manar.png"
import commitment from "../../assets/commitment-img.svg"

import { Col, Row, Button } from 'react-bootstrap';


const Commitment = () => {
    return (
        <section id='commitment' data-aos="fade-up" data-aos-duration="3000">
            <div className="commitment">
                <div className="container">
                    <Row className="commitment-row justify-content-center flex-column">
                        <Col className="img-left col-md-6">
                            <img src={commitment}></img>
                        </Col>
                        <Col className="text-right col-md-6">
                            <h1>We Are Committed
                                To Customer Satisfaction</h1>
                            <h6>Their be void upon image lights you fifth seed wherein for very mud the winged his days fruitful. Stars fruit fourth.</h6>
                            <Button variant="outline-warning" href="/">Primary</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default Commitment;