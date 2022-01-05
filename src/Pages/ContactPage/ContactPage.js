import React from 'react';
import ContactUs from '../../components/Contact/Contact';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import OurAddress from '../../components/OurAddress/OurAddress';

const ContactPage = () => {
    return (
        <div>
            <ContactUs></ContactUs>
            <NewsLetter></NewsLetter>
            <OurAddress></OurAddress>
        </div>
    );
};

export default ContactPage;