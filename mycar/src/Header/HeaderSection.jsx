import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderSection({menuname, link}) {
  return (
    <div>
        <h1 className='headersection'>
            <Link to={link}>{menuname}</Link> 
        </h1>
    </div>
  )
}
