

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import RPCLogo from './assets/rock_paper_scissors.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={RPCLogo} className="logo" alt="RPC logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on your play of choice. The computer will randomly choose a play and the winner will be displayed.
      </p>
    </>
  )
}

export default App
