import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar_styles.module.css'
import clsx from 'clsx'

const GlobalNavbar = () => {
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
      </div>
    </>
  )
}

const NavbarLiComponent = (props) => {
  const {
    path,
    name,
    linkClassName = "navbar__link--simple"
        } = props;
  return (
    <li className={classes["navbar__element"]}>
      <Link to={path}
            className={clsx(classes["navbar__link"], classes[linkClassName])}>
        {name}
      </Link>
    </li>
  )  
}

export default GlobalNavbar