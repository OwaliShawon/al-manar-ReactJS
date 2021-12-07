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
            title: 'card title 1',
            imgUrl: "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZHN8ZW58MHx8MHx8&w=1000&q=80",
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
        <section className="container">
            
            <div className="row">
                {
                    services.map((service) => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;