import React from 'react'
import classes from './../styles/about_styles.module.css'

const AboutFact = (props) => {
    const {row, column, heading, paragraph} = props;
    
    return (
        <section className={classes["about__fact"]} style={{ gridRow: row, gridColumn: column }}>
            <h2 className={classes["about__fact__heading"]}>{heading}</h2>
            <p className={classes["about__fact__paragraph"]}>{paragraph}</p>
        </section>
    )
}

export default AboutFact