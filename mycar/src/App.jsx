import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useRef, useState, useEffect } from 'react';

function App() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Just try to play audio once on load, no muting or fallback
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // autoplay blocked, do nothing
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
      />

      <button onClick={toggleMute} className="mute-button">
        {isMuted ? '🔇 Music Off' : '🔊 Music On'}
      </button>
    </>
  );
}

export default App;
