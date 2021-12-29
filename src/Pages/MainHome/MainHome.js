import React from 'react';
import Testimonial from '../../components/Testimonial/Testimonial';
import About from './../../components/About/About';
import Ask from './../../components/Ask/Ask';
import Commitment from './../../components/Commitment/Commitment';
import Companies from './../../components/Companies/Comapnies';
import CompanyDetails from './../../components/CompanyDetails/CompanyDetails';
import Employees from './../../components/Employees/Employees';
import Home from './../../components/Home/Home';
import Projects from './../../components/Projects/Projects';
import Services from './../../components/Services/Services';
import "./MainHome.css";


const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <div className='extra-margin'></div>
            <CompanyDetails></CompanyDetails>
            <Companies></Companies>
            <About></About>
            <Commitment></Commitment>
            <Projects></Projects>
            <Services></Services>
            <Testimonial></Testimonial>
            <Ask></Ask>
            <Employees></Employees>
        </div>
    );
};

export default MainHome;