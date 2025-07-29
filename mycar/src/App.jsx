import './App.css'
import Header from './Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Cars from './Pages/Cars'
import About from './Pages/About'
import Contact from './Pages/Contact'


function App() {

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
    </>
  )
}

export default App
