import React from 'react';
import "../CompanyDetails/CompanyDetails.css";
import alimage from "../../assets/front-gate.jpeg"
import { Button } from 'react-bootstrap';

const CompanyDetails = () => {
    return (
        <section id='company-details' className='container'>
            <div>
                <h1>Our company provides a various kind of real life solution</h1>
            </div>

            <div id='info' className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src={alimage} style={{ width: '520px' }}></img>
                        <small style={{ fontWeight: 'bold' }}>Head office of Family Food & AL-MANAR GROUP</small>
                    </div>
                    <div className='col' style={{ padding: '70px' }}>
                        <p>SINCE 2020</p>
                        <h3 style={{ fontSize: "34px" }}>Manufactuer Company </h3>
                        <p className='text-justify'>Al-Manar Group believes in self-branding for each and every consumer. In here the group provides all the necessary things to promote the customer along with their sister concerns. The group is committed to each & every consumer for making their bright future…</p>
                        <div className="mt-3">
                            <Button variant="outline-warning" href="/">Know More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyDetails;