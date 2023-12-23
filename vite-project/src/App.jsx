

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Play from './Play'
import Game from './Game'
import './App.css'
import './Header.css'
import './Play.css'


function App() {
  var [score, setScore] = useState(0)
  const [play, setPlay] = useState("")

  return (
    <>
    <Header score={score} />
      <Router>
        <Routes>
            <Route path="/" element={<Play play={play} setPlay={setPlay}  />} />
            <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
      <p className="read-the-docs">
        Click on your play of choice. The computer will randomly choose a play and the winner will be displayed.
      </p>
    </>
  )
}

export default App
