import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import classes from './footer_styles.module.css'

const UpButton = () => {
  return (
      <div className={clsx(classes["footer__icon-container"], classes["footer__element"])}>
        <a href="#top" className={classes["footer__icon-up"]}>
            <FontAwesomeIcon icon={faUpLong} />  
        </a>
      </div>
   
  )
}

export default UpButton