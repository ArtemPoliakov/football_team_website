import React from 'react'
import classes from './../styles/index_styles.module.css'

const MainIndexSection = () => {
    return (
    <>
       <header className={classes.header}>
            <h1>Футбольний клуб "FOOTBALL STARS"</h1>
       </header>
       <main className={classes.main}>
            <ul>
                <FactSection>Заняття для дітей від трьох років</FactSection>
                <FactSection>Досвідчені та сертифіковані тренери</FactSection>
                <FactSection>Перше тренування безкоштовно!</FactSection>  
            </ul>
       </main>
       <img className={classes.mainImg} src="src/assets/img/main_page_photo.webp"/>
    </>
  )
}

const FactSection = ({children}) => {
    return (
        <li className={classes.fact}>
            <section>
                <p>{children}</p>
            </section>
        </li>
    )
}

export default MainIndexSection