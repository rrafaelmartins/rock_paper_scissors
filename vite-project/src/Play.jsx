
import React, { useState } from 'react';
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

function Play() {
    const [play, setPlay] = useState("")

    return (
        <div>
            <div className="logos">
                <img src={rock} className="logo" alt="rock logo" onClick={() => setPlay((play) => "rock")} />
                <img src={paper} className="logo" alt="paper logo" onClick={() => setPlay((play) => "paper")}/>
                <img src={scissors} className="logo" alt="scissors logo" onClick={() => setPlay((play) => "scissors")}/>
            </div>
            <div className="card">
                <button>
                Selected play: {play}
                <br />
                Click here to play!
                </button>
            </div>
        </div>
    );
}

export default Play;
