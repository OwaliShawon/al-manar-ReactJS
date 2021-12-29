import React from 'react';
import logo from "../../assets/intig.png"
import alLogo from "../../assets/al-manar.png"
import ServicesItem from '../SevicesItem/ServicesItem';

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
            title: 'Food & Beverage',
            des: 'Family Food serves you the best quality to make you and your family healthy.'
        },
        {
            title: 'Digital Marketing',
            des: 'TMAC promotes your brand to the digital world, we are here to serve you best.'
        },
        {
            title: 'Auto Mobile',
            des: 'Al-Manar Auto Mobile import the best quality parts of you vehicles.'
        },
        {
            title: 'Cosmetics & Toiletries',
            des: 'Our product makes your life neat and clean.'
        },
    ];

    return (
        <section>
            <h1>Our Services</h1>
            <div className='d-flex justify-content-center'>
                <div className='row container'>
                    {services.map((service) => <ServicesItem service={service}></ServicesItem>)}
                </div>
            </div>

        </section>
    );
};

export default Services;