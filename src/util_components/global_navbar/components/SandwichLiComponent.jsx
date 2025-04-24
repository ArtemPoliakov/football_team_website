import React from 'react'
import classes from './../navbar_styles.module.css'
import { Link } from 'react-router-dom';
import sandwichClasses from './../sandwich_styles.module.css'
import clsx from 'clsx'

const SandwichLiComponent = (props) => {
  const {
      path,
      name,
      linkClassName = "sandwich__link--simple"
          } = props;
    return (
      <li className={sandwichClasses["sandwich__element"]}>
        <Link to={path}
              className={clsx(sandwichClasses["sandwich__link"], sandwichClasses[linkClassName])}>
          {name}
        </Link>
      </li>
    )  
}

export default SandwichLiComponent