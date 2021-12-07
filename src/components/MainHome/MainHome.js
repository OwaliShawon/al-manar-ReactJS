import React from 'react';
import Commitment from '../Commitment/Commitment';
import Home from '../Home/Home'
import About from '../About/About'
// import Commitment from '../Commitment/Commitment'
import Services from '../Services/Services'
import Ask from '../Ask/Ask';
import Projects from '../Projects/Projects';
import Employees from '../Employees/Employees';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Commitment></Commitment>
            <Services></Services>
            <Ask></Ask>
            <Projects></Projects>
            <Employees></Employees>
        </div>
    );
};

export default MainHome;