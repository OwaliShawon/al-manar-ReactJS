import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/NavbarPages/about';


function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
