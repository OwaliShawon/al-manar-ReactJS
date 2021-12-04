import React from 'react';
import { Col } from 'react-bootstrap';
// import "./ServiceCard.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ( props ) => {
    const { title, imageUrl, body } = props.service;
    return (
        <Col className="card-container col-4">
            <div className="image-container">
                <img src={imageUrl} alt></img>
            </div>

            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
        </Col>
    );
};

export default ServiceCard;