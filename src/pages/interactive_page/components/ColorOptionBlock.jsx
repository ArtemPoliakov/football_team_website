import React from 'react'
import classes from './../interactive_page_styles.module.css'

/* 2.3 */
const ColorOptionBlock = (props) => {
    const {squareRef, color} = props
  return (
      <button
          className={classes["color-option-block"]}
          style={{ backgroundColor: color }}
          onClick={() => squareRef.current.style.backgroundColor = color}
      />
  )
}

export default ColorOptionBlock