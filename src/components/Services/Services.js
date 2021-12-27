import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import logo from "../../assets/intig.png"
import alLogo from "../../assets/al-manar.png"

const Services = () => {
    const services = [
        {
            title: 'Software Development',
            des: 'We are Intigsol Limited to serve you the very best software solution.'
        },
        {
            title: 'Graphics & Animation',
            des: 'TMAC helps you to make your brand larger than others.'
        },
        {
            title: '',
            des: ''
        },
        {
            title: '',
            des: ''
        },
        {
            title: '',
            des: ''
        },
        {
            title: '',
            des: ''
        },

    ];
    return (
        <section>
            <h1>Services</h1>
            <div className='container d-flex justify-content-center'>
                <div className='row'>
                    <div class="card text-center">
                        <div class="card-header">
                            <img src={logo} className='w-50'></img>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Software Development</h5>
                            <p class="card-text">We are Intigsol Limited to serve you the very best software solution.</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;