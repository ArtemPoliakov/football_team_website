import React from 'react'
import FactSection from './FactSection'
import classes from './../styles/index_styles.module.css'

const IndexPage = () => {
  return (
    <div className={classes["grid-container"]}>
      <header className={classes["header"]}>
          <h1>Футбольний клуб "FOOTBALL STARS"</h1>
      </header>
      <main className={classes["main"]}>
          <ul className={classes["fact-list"]}>
                <FactSection>Заняття для дітей від трьох років</FactSection>
                <FactSection>Досвідчені та сертифіковані тренери</FactSection>
                <FactSection>Перше тренування безкоштовно!</FactSection>  
          </ul>
      </main>
      <img className={classes["main__img"]} src="src/assets/img/main_page_photo.webp"/>
    </div>
  )
}

export default IndexPage