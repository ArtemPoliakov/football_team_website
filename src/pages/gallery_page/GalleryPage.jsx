import React from 'react'
import classes from './styles/gallery_styles.module.css'
import reusableClasses from './../../global_styles/reusable.module.css'
import clsx from 'clsx'
const GalleryPage = () => {
  return (
    <div className={classes["gallery-flex-container"]}>
          <header  className={clsx(reusableClasses["header"],
                                  reusableClasses["header--narrow"],
                                  classes["gallery__header"])}>
              <h1>
                  Наша галерея
              </h1>
          </header>  

          <main className={classes["gallery__images-container"]}>
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
                            <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
                            <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
              <img src="src/assets/img/about/individual_approach.jpg"
                  className={clsx(reusableClasses["image"],
                      classes["gallery__image"])}
              />
          </main>
    </div>
  )
}

export default GalleryPage