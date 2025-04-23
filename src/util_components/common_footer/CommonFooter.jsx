import React from 'react'
import clsx from 'clsx';
import classes from './footer_styles.module.css'
import UpIcon from './UpIcon'
const CommonFooter = () => {
  return (
    <footer className={clsx(classes["footer"], classes["global__footer"])}>
      <p className={clsx(classes["footer__club-name"], classes["footer__element"])}>2025 Football Stars</p>
      <div  className={clsx(classes["footer__contacts"], classes["footer__element"])}>
        <p>Our contacts:</p>
        <ul className={clsx(classes["footer__contacts"], classes["footer__contacts-content"])}>
          <li>example@gmail.com</li>
          <li>+380-xx-xxx-xxxx</li>
        </ul>
      </div>
      <UpIcon />
    </footer>
  )
}

export default CommonFooter