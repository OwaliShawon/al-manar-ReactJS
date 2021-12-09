import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import logo from "../../assets/al-manar.png"

const Services = () => {
    return (
        <section>
            <h1 className='p-5'>OUR SERVICES</h1>
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={logo} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default Services;