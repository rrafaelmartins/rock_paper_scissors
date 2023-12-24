
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

function Play({play, setPlay}) {

    const navigate = useNavigate();

    const handleClick = () => {
      // Aqui você pode adicionar qualquer lógica antes da navegação
      navigate('/game');
    };

    return (
        
        <div>

            <div className="logos">
                <img src={rock} className="logo" alt="rock logo" onClick={() => setPlay("rock")} />
                <img src={paper} className="logo" alt="paper logo" onClick={() => setPlay("paper")}/>
                <img src={scissors} className="logo" alt="scissors logo" onClick={() => setPlay("scissors")}/>
            </div>
            <h2 id="selectedPlay">
            Selected play: {play}
            </h2>
            <div className="card">
                <button onClick={handleClick}>Click here to play!</button>
            </div>
        </div>
    );
}

export default Play;
