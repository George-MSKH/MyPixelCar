import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import HeaderSection from './HeaderSection';

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
      <h1 className="pixel-logo">MyPixelCar</h1>
  </div>


      <div className="header-links">
        <HeaderSection menuname="Home" link="/" />
        <HeaderSection menuname="Cars" link="/cars" />
        <HeaderSection menuname="About" link="/about" />
        <HeaderSection menuname="Contact" link="/contact" />
      </div>

      <div className="searchbar">
        <input
          type="search"
          placeholder="Search Cars"
          className="pixel-input"
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
}
