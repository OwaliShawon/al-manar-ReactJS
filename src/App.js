import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from './components/Footer/Footer';
import FooterCopyRight from './components/FooterCopyRight/FooterCopyRight';
import Menu from './components/Menu/Menu';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import MainHome from './Pages/MainHome/MainHome';



function App() {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainHome />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Menu></Menu>
        <Footer></Footer>
        <FooterCopyRight></FooterCopyRight>
      </BrowserRouter>
    </div>
  );
}

export default App;
