

import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Play from './Play'
import Game from './Game'
import Footer from './Footer'
import Modal from './Modal' 
import './App.css'
import './Header.css'
import './Play.css'
import './Game.css'
import './Footer.css'



function App() {
  var [score, setScore] = useState(0)
  var [rockCount, setRockCount] = useState(0)
  const [play, setPlay] = useState("")
  const [computerPlay, setComputerPlay] = useState("")
  const [playerWin, setPlayerWin] = useState("")
  const [modalDisplay, setModalDisplay] = useState(false)
  const options = ["rock", "paper", "scissors"];

  useEffect(() => { //useEffect hook. This will run every time the play state changes
    const selectedComputerPlay = options[Math.floor(Math.random() * options.length)];
    setComputerPlay(selectedComputerPlay);
  }, [play]);

  return (
    <>
    <Header score={score} />
    <Modal />
      <Router>
        <Routes>
            <Route path="/" element={<Play play={play} setPlay={setPlay} rockCount={rockCount} setRockCount={setRockCount} />} />
            <Route path="/game" element={<Game play={play} computerPlay={computerPlay} score={score} setScore={setScore} 
            playerWin = {playerWin} setPlayerWin = {setPlayerWin} rockCount = {rockCount} setRockCount = {setRockCount}/>} />
        </Routes>
      </Router>
      <Footer modalDisplay={modalDisplay} setModalDisplay={setModalDisplay}/>
      <p className="read-the-docs">
        Click on your play of choice. The computer will randomly choose a play and the winner will be displayed.
      </p>
    </>
  )
}

export default App
