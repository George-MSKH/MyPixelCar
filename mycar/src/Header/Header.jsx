import React from 'react';
import "./Header.css";
import HeaderSection from './HeaderSection';

export default function Header() {
  return (
    <div>
        <div className="header">
            <HeaderSection  menuname="Home" link='/' />
            <HeaderSection  menuname="Cars" link='/cars'/>
            <HeaderSection  menuname="About" link='/about'/>
            <HeaderSection  menuname="Contact" link='/contact'/>
        </div>
    </div>
  )
}
