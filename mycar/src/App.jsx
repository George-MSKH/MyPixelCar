import './App.css'
import Header from './Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Cars from './Pages/Cars'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { useRef, useState } from 'react';

function App() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

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
        <Route path='/cars' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/contact' element={<Home />} />

      </Routes>

    </Router>
    
      {/* Audio Player */}
      <audio
        ref={audioRef}
        src="/background-music.mp3" // Replace with your actual file name
        autoPlay
        loop
      />

      {/* Mute Button */}
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? '🔇 Music Off' : '🔊 Music On'}
      </button>
    </>
  );
}

export default App;
