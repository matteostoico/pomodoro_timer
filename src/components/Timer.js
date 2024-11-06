import React from 'react'
import '../style-sheets/Timer.css';

import { useState } from 'react';
import { useEffect } from 'react';

function Timer() {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0); 
    const [displayMessage, setDisplayMessage] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval); 

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes-1); 
                } else {
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;
                    
                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            } else {
                setSeconds(seconds-1);
            } 
        }, 1000)  //1000ms = 1s //

    }, [seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes; 
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds; 

    return (
        <div className='main-container'>
            <div className='message'>
                {displayMessage && <div>Time for a short break!</div>}
            </div>
            <div className='timer'>{timerMinutes}:{timerSeconds}</div>
        </div>
  )
}

export default Timer
