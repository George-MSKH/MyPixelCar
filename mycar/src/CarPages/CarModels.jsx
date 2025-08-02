import React, { useState, useEffect } from 'react';
import './CarModels.css';

export default function BmwCar({ name, model, category, year, images, rarity }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isHovered) {
      interval = setInterval(() => {
        setIndex(prev => (prev + 1) % images.length);
      }, 1800);
    } else {
      setIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const rarityBorders = {
    legendary: '2px solid gold',
    epic: '2px solid #a335ee',
    rare: '2px solid #0070dd',
    common: '2px solid #ccc',
  };

  const borderStyle = rarityBorders[rarity] || '2px solid white';

  const rarityLabel = rarity.charAt(0).toUpperCase() + rarity.slice(1);

  return (
    <div
      className="modelCard"
      style={{ border: borderStyle, background: '#171717' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="content">
        <div className="slider">
          <h1 className="rarity-label">{rarityLabel}</h1>

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${model} slide ${i + 1}`}
              className={i === index ? 'active' : ''}
              draggable={false}
            />
          ))}
        </div>

        <h1>{name}</h1>

        <div className="model-description">
          <div className="cardescflex">
            <h1>Model:</h1>
            <p>{model}</p>
          </div>
          <div className="cardescflex">
            <h1>Category:</h1>
            <p>{category}</p>
          </div>
          <div className="cardescflex">
            <h1>Year:</h1>
            <p>{year}</p>
          </div>
        </div>

        <button className="buyCarBtn">
          <span className="text">BUY</span>
        </button>
      </div>
    </div>
  );
}
