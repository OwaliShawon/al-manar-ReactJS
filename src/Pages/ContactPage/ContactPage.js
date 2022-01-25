import React from 'react';
import ContactUs from '../../components/Contact/Contact';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import OurAddress from '../../components/OurAddress/OurAddress';
import Home from './../../components/Home/Home';

const ContactPage = () => {
    return (
        <div>
            <Home></Home>
            <div className='extra-margin'></div>
            <ContactUs></ContactUs>
            <NewsLetter></NewsLetter>
            <OurAddress></OurAddress>
        </div>
    );
};

export default ContactPage;