import React from 'react';
import "./NewsLetter.css";


const NewsLetter = () => {
    return (
        <div>
            <div class="newsletter-subscribe">
                <div class="container">
                    <div class="intro">
                        <h2 class="text-center">Or Subscribe for our Newsletter</h2>
                        <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                    </div>
                    <form class="form-inline" method="post">
                        <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Your Email"/></div>
                        <div class="form-group"><button class="btn btn-primary" type="submit">Subscribe </button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;