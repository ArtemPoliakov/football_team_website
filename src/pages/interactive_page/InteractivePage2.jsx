import React, { useEffect, useState } from 'react'
import classes from './interactive_page_styles.module.css'
import reusableClasses from './../../global_styles/reusable.module.css'

const InteractivePage2 = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [lastPressedKey, setLastPressedKey] = useState(null);
    const [isHintDisplayed, setIsHintDisplayed] = useState(false);
    const [hintCoords, setHintCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        //2.4
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        const handleKeyDown = (event) => {
            setLastPressedKey(event.key);
        };
        window.addEventListener('keydown', handleKeyDown);

        //2.1
        const clickHandler = (event) => {
            setIsHintDisplayed(prev => !prev);
            setHintCoords({ x: event.clientX, y: event.clientY });
        }
        document.body.addEventListener('click', clickHandler);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleKeyDown);
            document.body.removeEventListener('click', clickHandler);
        };
    }, []);

    return (
        <>
           <div className={classes["intr2__mouse-coord"]}>
            Mouse coords: {mousePosition.x}, {mousePosition.y}
            <br/>
            Last pressed key: {lastPressedKey}
            </div>
            <div className={classes["intr2__pop-up-hint"]}
                style={{
                    display: isHintDisplayed ? "block" : "none",
                    left: hintCoords.x,
                    top: hintCoords.y
                }}
            >
                Це сайт футблольного клубу
                     "FOOTBALL STARS"
            </div>
        </>   
  )
}

export default InteractivePage2