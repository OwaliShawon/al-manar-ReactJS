import React from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import "./Home.css"

const Home = () => {

    return (
        <div>
            <div className="bg-image"></div>

            <div className="bg-text">
                <p>SINCE 1990</p>
                <h1>REAL SOLUTIONS!</h1>
                <h2>Manufacturing Relationships Distributing Quality</h2>
                <Button>Learn More</Button>
            </div>
        </div>
    );
};

export default Home;