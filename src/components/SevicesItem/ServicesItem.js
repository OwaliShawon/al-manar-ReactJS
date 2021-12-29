import React from 'react';
import logo from "../../assets/intig.png"

const ServicesItem = ({ service }) => {

    return (
        <div class="card text-center m-3">
            <div class="card-header">
                <img src={logo} className='w-50'></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">{service.title}</h5>
                <p class="card-text">{service.des}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
};

export default ServicesItem;