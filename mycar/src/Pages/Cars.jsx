import React from 'react'
import Card from '../Card/Card'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../Card/Card.css'

export default function Cars() {
  return (
    <div className="card-wrapper">
      <div  className='card'>
        <Card img="./image/bmw.png"  to="/cars/bmw" />
        <Card img="./image/merc.png"  to="/cars/mercedes" />
        <Card img="./image/audi.png"  to="/cars/audi" />
        <Card img="./image/porsche.png"  to="/cars/porsche" />
        <Card img="./image/toyota.png"  to="/cars/toyota" />
        <Card img="./image/nissan.png"  to="/cars/nissan" />
        <Card img="./image/infinity.png"  to="/cars/infinity" />
        <Card img="./image/lexus.png"  to="/cars/lexus" />
        <Card img="./image/mitsubishi.png"  to="/cars/mitsubishi" />
        <Card img="./image/subaru.png"  to="/cars/subaru" />
        <Card img="./image/jeep.png"  to="/cars/jeep" />
        <Card img="./image/honda.png"  to="/cars/honda" />
        <Card img="./image/ford.png"  to="/cars/ford" />
        <Card img="./image/dodge.png"  to="/cars/dodge" />
        <Card img="./image/landrover.png"  to="/cars/landrover" />
      </div>
    </div>
  )
}
