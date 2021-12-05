import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/NavbarPages/about';
import Home from './components/Home/Home';
import MainHome from './components/MainHome/MainHome';


function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<MainHome />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/events' component={Events} />
          <Route path='/annual' component={AnnualReport} />
          <Route path='/team' component={Teams} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </BrowserRouter>

      {/* <Home></Home> */}
    </div>
  );
}

export default App;
