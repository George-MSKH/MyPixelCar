import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({img, to}) {
  return (
    <div>
      <Link to={to} >
      <div className="pixel-card">
        <img className='Logo' src={img} alt="" />
      </div>
      </Link>
    </div>
  )
}
