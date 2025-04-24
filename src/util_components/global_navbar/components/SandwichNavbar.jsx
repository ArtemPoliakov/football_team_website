import React, { useRef, useState } from 'react'
import classes from './../navbar_styles.module.css'
import sandwichClasses from './../sandwich_styles.module.css'
import clsx from 'clsx'
import SandwichLiComponent from './SandwichLiComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const SandwichNavbar = (props) => {
  const {sandwichRef} = props;

  return (
    <nav className={sandwichClasses["sandwich-nav"]} ref={sandwichRef}>
      <ul className={sandwichClasses["sandwich__list"]}>
        <FontAwesomeIcon icon={faXmark}
          className={sandwichClasses["sandwich__close-icon"]}
          onClick={() => sandwichRef.current.style.transform = "translateX(100%)"}
        />
            <SandwichLiComponent path="/" name="Головна" />
            <SandwichLiComponent path="about" name="Про нас" />
            <SandwichLiComponent path="gallery" name="Галерея" />
            <SandwichLiComponent path="frames" name="Огляд сайту" />
            <SandwichLiComponent
              path="contact"
              name="Зареєструватись!"
              linkClassName={"sandwich__link--call-to-action"} />
          </ul>
    </nav>
  )
}

export default SandwichNavbar