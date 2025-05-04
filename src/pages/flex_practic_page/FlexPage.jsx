import React from 'react'
import classes from './flex_page_styles.module.css'
import clsx from 'clsx'
const FlexPage = () => {
    return (
    <>
{/*         <div className={classes["flex-container-1"]}>  
           <div className={clsx(classes["block"], classes["block-1"])}>Block-1</div>
           <div className={clsx(classes["block"], classes["block-2"])}>Block-2</div>
        </div>
        
            <div className={classes["task4__flex-wrapper"]}>
                <div className={classes["task4__inner-flex-container"]}>
                    <div className={classes["task4__block"]}>A</div>
                    <div className={classes["task4__block"]} style={{backgroundColor: "red"}}>B</div>
                </div>
                <div className={classes["task4__inner-flex-container"]}>
                    <div className={classes["task4__block"]} style={{backgroundColor: "green"}}>C</div>
                    <div className={classes["task4__block"]} style={{backgroundColor: "orange"}}>D</div>
                    <div className={classes["task4__block"]} style={{backgroundColor: "brown"}}>E</div>
                </div>
            </div> */}

            <div className={classes["positioning-experiment__container"]}>
                <div className={classes["positioning-experiment__block"]}
                    style={{ alignSelf: "flex-start" }}>
                    Block-1
                </div>
                <div className={classes["positioning-experiment__block"]}>Block-2</div>
                <div className={classes["positioning-experiment__block"]}>Block-3</div>
                <div className={classes["positioning-experiment__block"]}>Block-4</div>
                <div className={classes["positioning-experiment__block"]}>Block-5</div>
            </div>

    </>

  )
}

export default FlexPage