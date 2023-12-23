

import { useState } from 'react'
import Header from './Header'
import Play from './Play'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Play />
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on your play of choice. The computer will randomly choose a play and the winner will be displayed.
      </p>
    </>
  )
}

export default App
