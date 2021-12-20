import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainHome from './components/MainHome/MainHome';
import Commitment from './components/Commitment/Commitment';
import Ask from './components/Ask/Ask';
import Projects from './components/Projects/Projects';
import Employees from './components/Employees/Employees';
import Footer from './components/Footer/Footer';
import Nav from './components/NavTop/NavTop';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavTop from './components/NavTop/NavTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <BrowserRouter>
        {/* <NavTop></NavTop> */}
        <Routes>
          <Route path='/' exact element={<MainHome />} />
          <Route path='/about' element={<Employees />} />
          {/*
          <Route path='/events' element={<Commitment />} />
          <Route path='/annual' element={<Ask />} />
          <Route path='/team' element={<Projects />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
