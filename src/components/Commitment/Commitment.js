import React from 'react';
import "./Commitment.css"
import logo from "../../assets/intig.png"
import Button from '@restart/ui/esm/Button';
import { Col, Row } from 'react-bootstrap';


const Commitment = () => {
    return (
        <div className="commitment">
            <div className="container">
                <Row className="commitment-row">
                    <Col className="img-left col-md-6">
                        <img src={logo}></img>
                    </Col>
                    <Col className="text-right col-md-6">
                        <h1>We Are Committed
                            To Customer Satisfaction</h1>
                        <h6>Their be void upon image lights you fifth seed wherein for very mud the winged his days fruitful. Stars fruit fourth.</h6>
                        <Button className="btn btn-primary">READ MORE</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Commitment;