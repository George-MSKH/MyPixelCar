import React, { useState, useEffect } from 'react';
import './Homecss.css';

export default function Home() {
  const fullText = "Once it's sold, it’s history. No remakes. No second chances.";

  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const typingSpeed = isDeleting ? 30 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setPause(true);
        setTimeout(() => {
          setIsDeleting(true);
          setPause(false);
        }, 2000);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText, pause]);

  return (
    <div className="land">
      <div className='home'>
        <h1 className='hometext'>
          {displayedText}
          <span className='cursor'>|</span>
        </h1>

        <div className="cube">
          {/* 
            For images in the public folder, use src starting with /
            Example: /image/car.png
          */}
          <img src="/image/car.png" alt="car" />
        </div>
      </div>
    </div>
  );
}
