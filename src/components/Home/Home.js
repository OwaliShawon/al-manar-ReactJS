import React, { useEffect } from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import "./Home.css"
import bg from "../../assets/al-manar.png"


const Home = () => {


    return (
        <section id="header" className="d-flex align-items-start" data-aos="fade-up">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div data-aos="fade-right" data-aos-duration="2000" className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-left align-items-center">
                                <h1>Hello <br></br>
                                    <strong className='brand-name'> AL Manar Group</strong></h1>
                                <h2 className="mt-3">
                                    We are the team of talented people
                                </h2>

                                <div className="mt-3">
                                    <Button variant="outline-warning" href="/">Primary</Button>
                                </div>
                            </div>

                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={bg} className=" img-fluid animated" alt='home img'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="container">
                <img src={bg} alt="Snow" className="image" />
                <div className="centered">
                    <p>SINCE 1990</p>
                    <h1>REAL SOLUTIONS!</h1>
                    <h2>Manufacturing Relationships Distributing Quality</h2>
                    <Button variant="primary" >Learn More</Button>
                </div>
            </div>*/}

        </section>
    );
};

export default Home;