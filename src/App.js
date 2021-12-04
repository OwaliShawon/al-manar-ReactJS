import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import ReactSiteNav from './components/ReactSiteNav/ReactSiteNav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Footer></Footer>
    </div>
  );
}

export default App;
