import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar_styles.module.css'

const GlobalNavbar = () => {
  return (
    <nav className={classes.navStyle}>
      <ul className={classes.listStyle}>
        <NavbarLiComponent path="/" name="Головна" />
        <NavbarLiComponent path="about" name="Про нас" />
        <NavbarLiComponent
          path="contact"
          name="Зареєструватись!"
          linkClassName={classes.callToActionNavbarLink} />
      </ul>
    </nav>
  )
}

const NavbarLiComponent = (props) => {
  const { path, name, linkClassName=classes.navbarLink } = props;
  return (
    <li className={classes.NavbarElement}>
      <Link to={path} className={linkClassName}>{name}</Link>
    </li>
  )  
}

export default GlobalNavbar