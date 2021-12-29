import React from 'react';
import "./Testimonial.css";
import logo from '../../assets/intig.png'

const Testimonial = () => {
    return (
        <div>
            <div class="testimonials-clean">
                <div class="container">
                    <div class="intro">
                        <h2 class="text-center">Testimonials </h2>
                        <p class="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                    </div>
                    <div class="row people">
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                            </div>
                            <div class="author"><img class="rounded-circle" src={logo} />
                                <h5 class="name">Ben Johnson</h5>
                                <p class="title">CEO of Company Inc.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <p class="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
                            </div>
                            <div class="author"><img class="rounded-circle" src={logo} />
                                <h5 class="name">Carl Kent</h5>
                                <p class="title">Founder of Style Co.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <p class="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                            </div>
                            <div class="author"><img class="rounded-circle" src={logo} />
                                <h5 class="name">Emily Clark</h5>
                                <p class="title">Owner of Creative Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;