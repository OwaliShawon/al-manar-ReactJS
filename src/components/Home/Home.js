import React from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import "./Home.css"
import bg from "../../assets/intig.png"

const Home = () => {

    return (
        <section>
            <div className="container">
            <img src={bg} alt="Snow" className="image"/>
                <div className="centered">
                    <p>SINCE 1990</p>
                    <h1>REAL SOLUTIONS!</h1>
                    <h2>Manufacturing Relationships Distributing Quality</h2>
                    <Button variant="primary" >Learn More</Button>
                </div>
            </div>
        </section>
    );
};

export default Home;