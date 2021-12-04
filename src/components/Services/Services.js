import React from 'react';
import { Row } from 'react-bootstrap';
// import { Card, CardGroup, Col, Row } from 'react-bootstrap';
// import logo from '../../assets/intig.png'
// import CardColumns from '@bit/react-bootstrap.react-bootstrap.card-columns';
// import Card from '@bit/react-bootstrap.react-bootstrap.card';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = [
        {
            title: 'card title',
            imgUrl: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            body: "orem abla asdkfjhals asd"
        },
        {
            title: 'card title',
            imgUrl: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            body: "orem abla asdkfjhals asd"
        },
        {
            title: 'card title',
            imgUrl: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
            body: "orem abla asdkfjhals asd"
        }
    ];
    return (
        <div>
            <div className="row">
                {
                    services.map((service) => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;