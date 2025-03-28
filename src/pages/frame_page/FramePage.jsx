import React from 'react'
import classes from './frame_styles.module.css'
const FramePage = () => {
  return (
    <div className={classes["frame_container"]}>
          <iframe src="/" className={classes['frame']}/>
          <iframe src="about" className={classes['frame']} />
          <iframe src="contact" className={classes['frame']} />
    </div>
  )
}

export default FramePage