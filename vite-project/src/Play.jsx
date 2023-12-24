
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

function Play({play, setPlay, rockCount, setRockCount}) {

    const navigate = useNavigate();
    const [hidden, setHidden] = useState(false)

    const handleClick = () => {
      navigate('/game');
    };
    
    useEffect(() => {
        if (rockCount === 2) {
            setPlay("scissors")
            setHidden(true)
        }
    }, [rockCount, setRockCount]);


    return (
        
        <div>
            <h2 id="rockFlag" style={{ display: hidden ? "inline" : "none"}} >You played rock twice in a row. Choose another play.</h2>
            <div className="logos">
                <img src={rock} className="logo" alt="rock logo" style={{ display: hidden ? "none" : "inline"}} onClick={() => setPlay("rock")} />
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
