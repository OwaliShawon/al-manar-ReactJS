import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import commitment from "../../assets/commitment-img.svg";
import "./Commitment.css";



const Commitment = () => {
    return (
        <section id='commitment' data-aos="fade-up" data-aos-duration="3000">
            <div className="commitment">
                <div className="container">
                    <Row className="commitment-row justify-content-center flex-column">
                        <Col className="img-left col-md-6">
                            <img src={commitment} style={{ width: "100%" }}></img>
                        </Col>
                        <Col className="text-center text-lg-right col-md-6">
                            <h1 className="text-justify text-lg-right">We Are Committed
                                To Customer Satisfaction</h1>
                            <h6 className="text-justify">Their be void upon image lights you fifth seed wherein for very mud the winged his days fruitful. Stars fruit fourth.</h6>
                            <Button variant="outline-warning" href="/" className="mt-3">Primary</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default Commitment;