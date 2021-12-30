import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_kzrwpai', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div class="contact-clean">
            <form method="post" className="contact-form" onSubmit={sendEmail}>
                <h2 class="text-center">Contact us</h2>
                <div class="form-group"><input class="form-control" type="text" name="user_name" placeholder="Name" /></div>
                <div class="form-group"><input class="form-control" type="email" name="user_email" placeholder="Email" /></div>
                <div class="form-group"><textarea class="form-control" rows="14" name="message" placeholder="Message"></textarea></div>
                <div class="form-group"><button class="btn btn-primary" type="submit" value="Send">send </button></div>
            </form>
        </div>
    );
}