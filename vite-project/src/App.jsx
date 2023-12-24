

import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Play from './Play'
import Game from './Game'
import './App.css'
import './Header.css'
import './Play.css'
import './Game.css'


function App() {
  var [score, setScore] = useState(0)
  const [play, setPlay] = useState("")
  const [computerPlay, setComputerPlay] = useState("")
  const [playerWin, setPlayerWin] = useState("")
  const options = ["rock", "paper", "scissors"];

  useEffect(() => { //useEffect hook. This will run every time the play state changes
    const selectedComputerPlay = options[Math.floor(Math.random() * options.length)];
    setComputerPlay(selectedComputerPlay);
  }, [play]);

  return (
    <>
    <Header score={score} />
      <Router>
        <Routes>
            <Route path="/" element={<Play play={play} setPlay={setPlay}  />} />
            <Route path="/game" element={<Game play={play} computerPlay={computerPlay} score={score} setScore={setScore} 
            playerWin = {playerWin} setPlayerWin = {setPlayerWin}/>} />
        </Routes>
      </Router>
      <p className="read-the-docs">
        Click on your play of choice. The computer will randomly choose a play and the winner will be displayed.
      </p>
    </>
  )
}

export default App
