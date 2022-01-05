import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const OurAddress = () => {
    const MyAddress = {
        address: "121, Ottawan Centre, 5 New Eskaton Road, Dhaka 1000",
        email: "info@al-manargroup.com",
        number: "(+880) 1708572575",
    }
    return (
        <div className="bg-primary p-5">
            <Container className="text-center">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Card style={{ height: '200px' }} className="d-flex align-items-center p-3 bg-warning">
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '50px', paddingTop: '20px' }} />
                            <Card.Body>
                                <Card.Title>Address</Card.Title>
                                <Card.Text>
                                    {MyAddress.address}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: '200px' }} className="d-flex align-items-center p-3 bg-warning">
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '50px', paddingTop: '20px' }} />
                            <Card.Body>
                                <Card.Title>Email US</Card.Title>
                                <Card.Text>
                                    {MyAddress.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: '200px' }} className="d-flex align-items-center p-3 bg-warning ">
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: '50px', paddingTop: '20px' }} />
                            <Card.Body>
                                <Card.Title>Call US</Card.Title>
                                <Card.Text>
                                    {MyAddress.number}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurAddress;