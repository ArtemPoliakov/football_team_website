import React, { useEffect, useRef, useState } from 'react'
import classes from './interactive_page_styles.module.css'
import reusableClasses from './../../global_styles/reusable.module.css'
import ColorOptionBlock from './components/ColorOptionBlock';

const InteractivePage2 = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [lastPressedKey, setLastPressedKey] = useState(null);
    const [hintCoords, setHintCoords] = useState({ x: 0, y: 0 });
    const hintRef = useRef(null);
    const coloredSquareRef = useRef(null);

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
            if (!hintRef.current) return;
            if (event.target.tagName === "BUTTON") {
                hintRef.current.style.display = "none";
                return;
            }

            let hintDisplayMode = hintRef.current.style.display

            let hintWidth = hintRef.current.offsetWidth;
            let hintHeight = hintRef.current.offsetHeight;
            const hintX = hintRef.current.offsetLeft;
            const hintY = hintRef.current.offsetTop;

            const clickX = event.clientX;
            const clickY = event.clientY;

            const isClickInsideHint = (
                clickX >= hintX && clickX <= hintX + hintWidth &&
                clickY >= hintY && clickY <= hintY + hintHeight
            );

            if (hintDisplayMode === "block") {
                if (isClickInsideHint) {
                    return;
                } else {
                    hintRef.current.style.display = "none";
                    return;
                }
            } else {
                hintRef.current.style.display = "block";
                let newHintX = clickX;
                let newHintY = clickY;

                hintWidth = hintRef.current.offsetWidth;
                hintHeight = hintRef.current.offsetHeight;
                
                if (clickX + hintWidth > window.innerWidth) {
                    newHintX = clickX - hintWidth;
                }
                if (clickY + hintHeight > window.innerHeight) {
                    newHintY = clickY - hintHeight;
                }
                setHintCoords({ x: newHintX, y: newHintY });
    }
}
        document.body.addEventListener('click', clickHandler);

        //2.10
        document.addEventListener("contextmenu", (e) => e.preventDefault());
        document.addEventListener("keydown", (e) => {
        if (
            e.key === "F12" ||                            // DevTools
            (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
            (e.ctrlKey && e.key.toLowerCase() === "u")                  // Ctrl+U (View Source)
        )
        {
           e.preventDefault();
        }
        });

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
                    display: "none",
                    left: hintCoords.x,
                    top: hintCoords.y
                }}
                ref={hintRef}
            >
                Це сайт футблольного клубу
                     "FOOTBALL STARS"
            </div>

            {/* 2.3 */}
            <div className={classes["coloring-task-container"]}>
                <div className={classes["palette-flex-container"]}>
                    <ColorOptionBlock squareRef={coloredSquareRef} color="red" />
                    <ColorOptionBlock squareRef={coloredSquareRef} color="yellow" />
                    <ColorOptionBlock squareRef={coloredSquareRef} color="green" />
                    <ColorOptionBlock squareRef={coloredSquareRef} color="white" />
                    <ColorOptionBlock squareRef={coloredSquareRef} color="blue" />
                </div>

                <div className={classes["colored-square"]} ref={coloredSquareRef}></div>
            </div>  
        </>   
  )
}

export default InteractivePage2