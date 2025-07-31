import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useRef, useState, useEffect } from 'react';
import CarPageRouter from './CarPages/CarPageRouter';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cars/:brand' element={<CarPageRouter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
