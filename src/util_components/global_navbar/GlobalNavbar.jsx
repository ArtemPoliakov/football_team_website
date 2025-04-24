import React, { useRef } from 'react'
import classes from './navbar_styles.module.css'
import clsx from 'clsx'
import NavbarLiComponent from './components/NavbarLiComponent'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SandwichNavbar from './components/SandwichNavbar'

const GlobalNavbar = () => {
  const sandwichRef = useRef(null);
  return (
    <>
      <div className={classes["navbar-flex-container"]}>
        <img className={clsx(classes["logo"], classes["navbar__logo"])}
             src="src\assets\img\logo_v2.png" />
        <nav className={clsx(classes["navbar"],classes["global__navbar"])}>
          <ul className={classes["navbar__list"]}>
            <NavbarLiComponent path="/" name="Головна" />
            <NavbarLiComponent path="about" name="Про нас" />
            <NavbarLiComponent path="gallery" name="Галерея" />
            <NavbarLiComponent path="frames" name="Огляд сайту" />
            <NavbarLiComponent
              path="contact"
              name="Зареєструватись!"
              linkClassName={"navbar__link--call-to-action"} />
          </ul>
        </nav>
        <FontAwesomeIcon icon={faBars}
              className={classes["navbar__open-sandwich-icon"]}
              onClick={() => {sandwichRef.current.style.transform = "translateX(0)"}}/>
      </div>
      <SandwichNavbar sandwichRef={sandwichRef} />
    </>
  )
}

export default GlobalNavbar