import React from 'react'
import "./Header.css"
import HeaderSection from './HeaderSection'

export default function Header() {
  return (
    <div>
        <div className="header">
            <HeaderSection  menuname="Home"/>
            <HeaderSection  menuname="Cars"/>
            <HeaderSection  menuname="About"/>
            <HeaderSection  menuname="Contact"/>
        </div>
    </div>
  )
}
