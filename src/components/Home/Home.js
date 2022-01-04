import React from 'react';
import { Button } from 'react-bootstrap';
import bg from "../../assets/front-gate.jpeg";
import "./Home.css";



const Home = () => {

    return (
        <div>
            <div id='header' className="header-dark" data-aos="fade-up">
                {/* navbar */}
                <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div class="container">
                        <a class="navbar-brand" href="/">Al-Manar Group</a>
                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse d-flex justify-content-end"
                            id="navcol-1">
                            <ul class="nav navbar-nav">
                                <li class="nav-item" role="presentation"><a class="nav-link" href="/">HOME</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" href="/about">ABOUT</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link" href="/contact">CONTACT</a></li>
                                <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">COMPANIES </a>
                                    <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



                {/* hero section */}
                <div className="container hero pt-5">
                    <div className="row">
                        <div className=" mx-auto">
                            <div className='row'>
                                <div data-aos="fade-right" data-aos-duration="2000" style={{ paddingBottom: "20vh" }} className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column  align-items-start">
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
                                        <img src={bg} className="img-fluid" alt='home img' style={{ width: "600px", marginTop: "25vh" }}></img>
                                        <small className='row' style={{ color: "orange" }}>121, Ottawan Centre, 5 New Eskaton Road, Dhaka 1000</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;