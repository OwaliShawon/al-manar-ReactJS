import React from 'react';
import Commitment from '../Commitment/Commitment';
import Home from '../Home/Home'
import About from '../About/About'
// import Commitment from '../Commitment/Commitment'
import Services from '../Services/Services'
import Ask from '../Ask/Ask';
import Projects from '../Projects/Projects';
import Employees from '../Employees/Employees';
import NavTop from '../NavTop/NavTop';
import "./MainHome.css"
import CompanyDetails from '../CompanyDetails/CompanyDetails';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <div className='extra-margin'></div>
            <CompanyDetails></CompanyDetails>
            {/* <About></About> */}
            {/* <Commitment></Commitment> */}
            {/* <Projects></Projects> */}
            {/*<Services></Services> */}
            {/* <Ask></Ask> */}
            {/**/}
            {/* <Employees></Employees> */}
        </div>
    );
};

export default MainHome;