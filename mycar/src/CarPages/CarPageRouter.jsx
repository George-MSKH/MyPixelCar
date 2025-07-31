import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Bmw from './Bmw'

export default function CarPageRouter() {

      const { brand } = useParams();
      
      const carBrand = {
          bmw: <Bmw />
        }
      return carBrand[brand] || <h1 className='notFoundCar'>Car Isn't Found</h1>
}
