

import { useState } from 'react'
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logos">
          <img src={rock} className="logo" alt="rock logo" />
          <img src={paper} className="logo" alt="paper logo" />
          <img src={scissors} className="logo" alt="scissors logo" />
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
