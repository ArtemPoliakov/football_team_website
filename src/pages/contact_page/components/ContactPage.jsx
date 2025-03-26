import React from 'react'
import RegisterForm from './RegisterForm'
import classes from './../styles/contact_styles.module.css'
const ContactPage = () => {
  return (
    <div className={classes["contact-page"]}>
      <header className={classes["contact__header"]}>
        <h1>Запишіться на пробне заняття!</h1>
      </header>
      <RegisterForm />
    </div>
  )
}

export default ContactPage