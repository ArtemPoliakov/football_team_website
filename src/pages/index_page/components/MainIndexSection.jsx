import React from 'react'
import classes from './../styles/index_styles.module.css'

const MainIndexSection = () => {
    return (
    <>
        <header className={classes.header}>
            <h1>Футбольний клуб "FOOTBALL STARS"</h1>
       </header>
       <main className={classes.main}>
            <FactSection>Fact 1</FactSection>
            <FactSection>Fact 2</FactSection>
            <FactSection>Fact 3</FactSection>
       </main>
    </>

  )
}

const FactSection = ({children}) => {
    return (
        <section className={classes.fact}>
            <p>{children}</p>
        </section>
    )
}

export default MainIndexSection