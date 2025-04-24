import React from 'react'
import classes from './../styles/contact_styles.module.css'

const RegisterForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        let message = "Дякуємо за реєстрацію!\nМи зв'яжемося з вами найближчим часом! \n";
        for (let prop in payload) {
            message += prop + ": " + payload[prop] + "\n";
        }
        alert(message);
    }

  return (
      <main className={classes["register"]}>
          <form onSubmit={handleSubmit}>
              <div className={classes["contact__register-input-block"]}>
              <label for="phone">Номер телефону</label>
                  <input type="tel"
                      id="phone"
                      name="phone"
                      placeholder="xxx-xxx-xxxx"
                      pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}"
                      required
                      className={classes["contact__register-input"]}
                      />
              </div>
              <div className={classes["contact__register-input-block"]}>
              <label for="email">Email</label>
                  <input type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      maxLength="320"
                      required
                      className={classes["contact__register-input"]}/>
               </div>
              <div className={classes["contact__register-input-block"]}>
              <label for="birthday">Дата народження дитини</label>
                  <input type="date"
                      id="birthday"
                      name="birthdayDate"
                      maxLength="320"
                      required
                      className={classes["contact__register-input"]}/>
               </div>
              <button type="submit" className={classes["contact__register-button"]}>
                  Записатись на заняття
              </button>
          </form>
    </main>
  )
}

export default RegisterForm