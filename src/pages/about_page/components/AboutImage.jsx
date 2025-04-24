import React from 'react'
import reusableClasses from './../../../global_styles/reusable.module.css'

const AboutImage = (props) => {
    const { row, column, src } = props;
  return (
      <img src={src} className={reusableClasses["image"]} style={{gridRow: row, gridColumn: column}}/>
  )
}

export default AboutImage