import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar_styles.module.css'

const GlobalNavbar = () => {
  return (
    <nav className={classes.navStyle}>
      <ul className={classes.listStyle}>
        <NavbarLiComponent path="/" name="Головна" />
        <NavbarLiComponent path="about" name="Про нас" />
        <NavbarLiComponent path="contact" name="Зареєструватись!" />
      </ul>
    </nav>
  )
}

const NavbarLiComponent = (props) => {
  const { path, name } = props;
  return (
    <li className={classes.listElement}>
      <Link to={path} className={classes.link}>{name}</Link>
    </li>
  )  
}

export default GlobalNavbar