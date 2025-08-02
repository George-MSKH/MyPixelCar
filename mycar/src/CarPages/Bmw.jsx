import React from 'react';
import './CarModels.css';
import BmwCar from './CarModels';

export default function Bmw() {
  const bmwModels = [
    {
      name: 'BMW',
      model: 'E46',
      category: 'Coupe',
      year: '1997-2006',
      rarity: 'legendary',
      images: [
        '/image/Cars/e46/e46-front.png',
        '/image/Cars/e46/e46-side.png',
        '/image/Cars/e46/e46-back.png',
      ]
    },
    {
      name: 'BMW',
      model: 'E36',
      category: 'Sedan',
      year: '1990-2000',
      rarity: 'epic',
      images: [
        '/image/Cars/e36/e36-front.png',
        '/image/Cars/e36/e36-side.png',
        '/image/Cars/e36/e36-back.png',
      ]
    },
    {
      name: 'BMW',
      model: 'Z4',
      category: 'Roadster',
      year: '2002-2008',
      rarity: 'epic',
      images: [
        '/image/z4_1.png',
        '/image/z4_2.png',
      ]
    },

    // Add more models here
  ];

  return (
    <div className="BmwCars">
      {bmwModels.map((car, i) => (
        <BmwCar key={i} {...car} />
      ))}
    </div>
  );
}
