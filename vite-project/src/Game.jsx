import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissors from './assets/scissors.png';

function Game({play, computerPlay, score, setScore, playerWin, setPlayerWin, rockCount, setRockCount}) {

    const navigate = useNavigate();

    useEffect(() => {
        if (play === "rock"){
            setRockCount(rockCount + 1)
        }
        if (rockCount === 2){
            setRockCount(0)
        }
    }, [setRockCount])




    const handleClick = () => {
        navigate('/');
    }

    useEffect(() => {
        if (play === "rock" && computerPlay === "scissors") {
            setPlayerWin("You win!");
            setScore(score + 1);
        } else if (play === "rock" && computerPlay === "paper") {
            setPlayerWin("You lost!");
            setScore(score - 1);
        } else if (play === "paper" && computerPlay === "rock") {
            setPlayerWin("You win!");
            setScore(score + 1);
        } else if (play === "paper" && computerPlay === "scissors") {
            setPlayerWin("You lost!");
            setScore(score - 1);
        } else if (play === "scissors" && computerPlay === "paper") {
            setPlayerWin("You win!");
            setScore(score + 1);
        } else if (play === "scissors" && computerPlay === "rock") {
            setPlayerWin("You lost!");
            setScore(score - 1);
        } else {
            setPlayerWin("Draw!");
        }
    }, [play, computerPlay, setScore, setPlayerWin]); //useEffect dependencies. If any of these change, useEffect will run again

    return (
        <div>
            <div id="resultText">
                <h2>{playerWin}</h2>
            </div>
            <div id="resultDisplay">
                <div id="playerChoice">
                    <h2 className="choiceText">Your choice</h2>
                    <img src={play === "rock" ? rock : play === "paper" ? paper : scissors} className="logo" alt="player choice"/>
                </div>
                <div id="playAgain">
                    <button  onClick={handleClick}>Play again</button>
                </div>
                    
                <div id="computerChoice">
                    <h2 className="choiceText">Computer</h2>
                    <img src={computerPlay === "rock" ? rock : computerPlay === "paper" ? paper : scissors} className="logo" alt="computer choice"/>
                </div>
            </div>
        </div>
    );
}

export default Game;