import React from 'react';
import Card from './Card'; // adjust path if needed
import './Card.css'; // contains all styles

// Sample image imports or URLs
const carLogos = [
  '/logos/bmw.png',
  '/logos/toyota.png',
  '/logos/honda.png',
  '/logos/nissan.png',
  '/logos/mazda.png',
  '/logos/mercedes.png'
];

export default function LogoGallery() {
  return (
    <div className="card-wrapper">
      <div className="card">
        {carLogos.map((img, index) => (
          <Card key={index} img={img} />
        ))}
      </div>
    </div>
  );
}
