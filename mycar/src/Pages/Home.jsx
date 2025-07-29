import React, { useState, useEffect } from 'react';
import './Homecss.css';

export default function Home() {
  const fullText = "Once it's sold, it’s history. No remakes. No second chances.";

  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = 2000; // pause after full type

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText]);

  return (
    <div className="land">
      <div className='home'>
        <h1 className='hometext'>
          {displayedText}
          <span className='cursor'>|</span>
        </h1>

        <div className="cube">
          <img className='car' src="./image/car.png" alt="car" />
        </div>
      </div>
    </div>
  );
}
