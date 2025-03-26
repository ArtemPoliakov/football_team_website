import React from 'react'
import clsx from 'clsx';
import classes from './footer_styles.module.css'
import UpIcon from './UpIcon'
const CommonFooter = () => {
  return (
    <div className={classes.footerContainer}>
      <p className={clsx(classes["footer__club-name"], classes["footer-element"])}>2025 Football Stars</p>
      <div  className={clsx(classes["footer__contacts"], classes["footer-element"])}>
        <p>Our contacts:</p>
        <ul className={clsx(classes["footer__contacts"], classes["footer__contacts__content"])}>
          <li>example@gmail.com</li>
          <li>+380-xx-xxx-xxxx</li>
        </ul>
      </div>
      <UpIcon />
    </div>
  )
}

export default CommonFooter