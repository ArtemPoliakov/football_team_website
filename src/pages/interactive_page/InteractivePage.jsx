import React, { useRef, useEffect, useState } from 'react'
import classes from './interactive_page_styles.module.css'
import reusableClasses from './../../global_styles/reusable.module.css'
import clsx from 'clsx'
const InteractivePage = () => {
    const imgRef = useRef(null);
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(setImageJumpingAccrossThePage, 1000); //1.2

        alterAllP(); //1.3

        const clockProcessId = setInterval(updateCLock, 1000); //1.4
        
        return () => { 
            clearInterval(intervalId);
            clearInterval(clockProcessId);
        }
    }, []); 

    //1.1
    const getDivWithTextSetToSize = (text, size) => {
        return <div style={{ fontSize: size }}>
                    {text}
            </div>
    }
    //1.2
    const setImageJumpingAccrossThePage = () => {
        const maxWidth = window.innerWidth - imgRef.current.offsetHeight;
        const maxHeight = window.innerHeight - imgRef.current.offsetWidth;

        const x = Math.random() * maxWidth;
        const y = Math.random() * maxHeight;

        imgRef.current.style.position = "fixed";
        imgRef.current.style.left = `${x}px`;
        imgRef.current.style.top = `${y}px`;
    }

    //1.3
    const alterAllP = () => {
        const pElements = document.getElementsByTagName("p");
        for (let i of pElements) { 
            i.setAttribute("style", "font-size: 15px");
        }
    }

    //1.4
    const updateCLock = () => {
       setCurrentTime(new Date().toLocaleTimeString());
    }
    

    const jumpingImage =
        <img src="src/assets/img/about/individual_approach.jpg"
            id="jumping-image"
            ref={imgRef}
            className={clsx(reusableClasses["image"], classes["jumping-image"])}
        />

    return (
        <>
        {getDivWithTextSetToSize("Hello world", 100)}
        {jumpingImage}
        <div className={classes["clock"]}>CLOCK:
            <span>{currentTime}</span>
        </div>
        
            <p> P1 Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p> P2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div>DIV ELEMENT</div>
            <p> P3 Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p> P4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </>
     
    )
}
export default InteractivePage