import React, { useEffect } from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import "./Home.css"
import bg from "../../assets/front-gate.jpeg"


const Home = () => {


    return (
        <section id="header" className="d-flex align-items-start" data-aos="fade-up">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div data-aos="fade-right" data-aos-duration="2000" className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column  align-items-start">
                                <h1 className='text-left'>Welcome To <br></br>
                                    <strong className='brand-name'> AL-MANAR GROUP</strong></h1>
                                <h2 className="mt-lg-3 text-justify">
                                    Al-Manar is a well-known aggregate with a built-up brand in Bangladesh. The group brought in 2021 with a humble starting. Each and every kind of facilities can be delivered here. Over a short time, the group has developed naturally and make their connection in all over the Bangladesh
                                </h2>

                                <div className="mt-3">
                                    <Button variant="outline-warning" href="/">Primary</Button>
                                </div>
                            </div>

                            <div className='col-md-6 order-md-2 col-lg-6 order-1 order-lg-2 header-img'>
                                <div className='col'>
                                    <img src={bg} className=" img-fluid" alt='home img' style={{ width: "35rem" }}></img>
                                    <small className='row'  style={{ color: "white" }}>121, Ottawan Centre, 5 New Eskaton Road, Dhaka 1000</small>
                                </div>
                            </div>

                            {/* <div className='col-md-6 order-md-2 col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={bg} className=" img-fluid" alt='home img'  style={{width: "35rem"}}></img>
                                <small>121, Ottawan Centre, 5 New Eskaton Road, Dhaka 1000</small>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;