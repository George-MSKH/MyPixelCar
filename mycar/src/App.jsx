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

  // Try to autoplay audio on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false; // Start unmuted
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might be blocked by browser, so mute and play silently
          audioRef.current.muted = true;
          audioRef.current.play();
          setIsMuted(true);
        });
      }
    }
  }, []);

  // Toggle mute/unmute
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

      {/* Audio Player */}
      <audio
        ref={audioRef}
        src="/background-music.mp3" // Replace with your actual file in public folder
        loop
      />

      {/* Mute/Unmute Button */}
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? '🔇 Music Off' : '🔊 Music On'}
      </button>
    </>
  );
}

export default App;
