import React from 'react'
import classes from './../styles/about_styles.module.css'

const AboutImage = (props) => {
    const { row, column, src } = props;
  return (
      <img src={src} className={classes["about_image"]} style={{gridRow: row, gridColumn: column}}/>
  )
}

export default AboutImage