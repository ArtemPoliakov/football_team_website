import React from 'react'
import classes from './../styles/index_styles.module.css'
import MainIndexSection from './MainIndexSection'
const IndexPage = () => {
  return (
    <div className={classes.gridContainer}>
      <MainIndexSection />
    </div>
  )
}

export default IndexPage