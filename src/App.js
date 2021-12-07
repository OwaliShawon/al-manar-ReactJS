import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/NavbarPages/about';
import Home from './components/Home/Home';
import MainHome from './components/MainHome/MainHome';
import Commitment from './components/Commitment/Commitment';
import Ask from './components/Ask/Ask';
import Projects from './components/Projects/Projects';
import Employees from './components/Employees/Employees';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<MainHome />} />
          {/*<Route path='/about' element={<About />} />
          <Route path='/events' element={<Commitment />} />
          <Route path='/annual' element={<Ask />} />
          <Route path='/team' element={<Projects />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
