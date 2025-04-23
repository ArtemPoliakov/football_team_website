import React from 'react'
import classes from './../styles/about_styles.module.css'

const AboutFact = (props) => {
    const {row, column, heading, paragraph} = props;
    
    return (
        <section className={classes["fact"]} style={{ gridRow: row, gridColumn: column }}>
            <h2 className={classes["fact__heading"]}>{heading}</h2>
            <p className={classes["fact__paragraph"]}>{paragraph}</p>
        </section>
    )
}

export default AboutFact