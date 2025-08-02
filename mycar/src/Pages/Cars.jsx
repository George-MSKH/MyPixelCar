import React from 'react'
import Card from '../Card/Card'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../Card/Card.css'

export default function Cars() {
  return (
    <div className="card-wrapper">
      <div  className='card'>
        <Card img="./image/Logos/bmw.png"  to="/cars/bmw" />
        <Card img="./image/Logos/merc.png"  to="/cars/mercedes" />
        <Card img="./image/Logos/audi.png"  to="/cars/audi" />
        <Card img="./image/Logos/porsche.png"  to="/cars/porsche" />
        <Card img="./image/Logos/toyota.png"  to="/cars/toyota" />
        <Card img="./image/Logos/nissan.png"  to="/cars/nissan" />
        <Card img="./image/Logos/infinity.png"  to="/cars/infinity" />
        <Card img="./image/Logos/lexus.png"  to="/cars/lexus" />
        <Card img="./image/Logos/mitsubishi.png"  to="/cars/mitsubishi" />
        <Card img="./image/Logos/subaru.png"  to="/cars/subaru" />
        <Card img="./image/Logos/jeep.png"  to="/cars/jeep" />
        <Card img="./image/Logos/honda.png"  to="/cars/honda" />
        <Card img="./image/Logos/ford.png"  to="/cars/ford" />
        <Card img="./image/Logos/dodge.png"  to="/cars/dodge" />
        <Card img="./image/Logos/landrover.png"  to="/cars/landrover" />
      </div>
    </div>
  )
}
