import React from 'react';
import Commitment from "../../components/Commitment/Commitment";
import About from '../About/About';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import Home from '../Home/Home';
import "./MainHome.css";

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <div className='extra-margin'></div>
            <CompanyDetails></CompanyDetails>
            <About></About>
            <Commitment></Commitment>
            {/* <Projects></Projects> */}
            {/*<Services></Services> */}
            {/* <Ask></Ask> */}
            {/**/}
            {/* <Employees></Employees> */}
        </div>
    );
};

export default MainHome;