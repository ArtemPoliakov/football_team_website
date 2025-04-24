import React from 'react'
import classes from './../navbar_styles.module.css'
import { Link } from 'react-router-dom';
import clsx from 'clsx'

const NavbarLiComponent = (props) => {
  const {
    path,
    name,
    linkClassName = "navbar__link--simple"
        } = props;
  return (
    <li className={classes["navbar__element"]}>
      <Link to={path}
            className={clsx(classes["navbar__link"], classes[linkClassName], classes["desctop-only"])}>
        {name}
      </Link>
    </li>
  )  
}

export default NavbarLiComponent