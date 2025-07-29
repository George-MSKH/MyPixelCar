import React from 'react'
import './Card.css'

export default function Card({img}) {
  return (
    <div>
      <div className="pixel-card">
        <img className='Logo' src={img} alt="" />
      </div>
    </div>
  )
}
