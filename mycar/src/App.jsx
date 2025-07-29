import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
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
      <Header />
      <div className="land">
        <Home />
      </div>

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
