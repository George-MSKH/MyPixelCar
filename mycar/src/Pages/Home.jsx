import React, { useState, useEffect, useRef } from "react";
import "./Homecss.css";

export default function Home() {
  const fullText =
    "Once it's sold, it’s history.\nNo remakes.\nNo second chances.";

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [carPos, setCarPos] = useState({ left: 0, top: 0 });

  const containerRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = 2000;

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
  }, [charIndex, isDeleting]);

  useEffect(() => {
    if (endRef.current && containerRef.current) {
      const left = endRef.current.offsetLeft;
      const top = endRef.current.offsetTop;

      // Push rider 4px up for perfect alignment
      setCarPos({ left: left + 4, top: top - 35 });
    }
  }, [displayedText]);

  return (
      <div className="home" ref={containerRef}>
        <h1 className="hometext">
          <span className="text-wrapper" style={{ whiteSpace: "pre-wrap" }}>
            {displayedText}
            <span
              ref={endRef}
              style={{
                display: "inline-block",
                width: "1px",
                height: "1em",
                verticalAlign: "middle",
              }}
            />
          </span>
          <img
            src="/image/rider.png"
            alt="rider"
            className="car-inline"
            style={{
              left: carPos.left,
              top: carPos.top,
            }}
          />
        </h1>

        <div className="cube">
          <img className="car" src="/image/car.png" alt="car" />
        </div>
      </div>
  );
}
