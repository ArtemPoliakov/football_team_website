import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './interactive_page_styles.module.css'
import Notes from './components/Notes';

const InteractivePage3 = () => {
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();
    const intervalRef = useRef(null);
    const timerRef = useRef(null);

    const countdownRedirect = () => { 
        if (intervalRef.current !== null) return;
        timerRef.current.style.display = "block";
        
        intervalRef.current = setInterval(() => {
            setSeconds(prev => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    navigate("/");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
      <>
            <div className={classes["intr-3__timer-task-container"]}>
                <button
                    className={classes["intr-3__timer-task-button"]}
                    onClick={countdownRedirect}
                >
                    Start timer!
                </button>
                <div
                    className={classes["intr-3__timer-task-timer"]}
                    ref={timerRef}
                >
                    До редиректу на головну: <br/>
                    {`${seconds} сек.`}
                </div>
            </div>

            <Notes />
      </>
    
    )
}

export default InteractivePage3