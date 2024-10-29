import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import About from './pages/About';
import SE03Lite from './pages/SE03Lite';
import SE03 from './pages/SE03';
import SE03Max from './pages/SE03Max';  
import Contact from './pages/Contact';
import PreBook from './pages/PreBook';
import Rentals from './pages/Rentals';
import Compare from './pages/Compare';
import Footer from './components/Footer';
 

function App() {
  return (
    <Router>
      <div className="App">
        <Sidenav />
      

        <div className="main-content">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/se03lite" element={<SE03Lite />} />
            <Route path="/se03" element={<SE03 />} />
            <Route path="/se03max" element={<SE03Max />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prebook" element={<PreBook />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
