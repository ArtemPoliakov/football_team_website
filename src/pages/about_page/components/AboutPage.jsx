import React from 'react'
import classes from './../styles/about_styles.module.css'
import reusableClasses from './../../../global_styles/reusable.module.css'
import AboutFact from './AboutFact'
import AboutImage from './AboutImage'
import clsx from 'clsx'
const AboutPage = () => {
  const mainSectionParagraphOne = "Футбольний клуб Football Stars – це місце, де діти не просто грають у футбол, а розвиваються фізично, тактично та ментально. Ми навчаємо не тільки технічним навичкам, а й виховуємо в наших учнях дисципліну, командний дух і любов до спорту.";
  const mainSectionParagraphTwo = "Наші тренери – професіонали з багаторічним досвідом, які знаходять підхід до кожної дитини, допомагаючи їй розкрити потенціал. У нашому клубі тренування проходять у сучасних умовах, з використанням новітніх методик підготовки.";
  const mainSectionParagraphThree = "Ми прагнемо, щоб кожен наш вихованець отримав найкращий старт у спортивній кар'єрі або просто здобув корисні навички, які допоможуть у житті!";
  const factSectionHeaderOne = "Сучасні методики тренувань";
  const factSectionParagraphOne = "адаптовані до віку та рівня підготовки дітей";
  const factSectionHeaderTwo = "Кваліфіковані тренери";
  const factSectionParagraphTwo = "дипломовані спеціалісти з досвідом роботи з дітьми";
  const factSectionHeaderThree = "Індивідуальний підхід";
  const factSectionParagraphThree = "кожна дитина отримує необхідну увагу та підтримку";

  return (
    <div className={classes["about-grid-container"]}>
      <header className={clsx(reusableClasses["header"], classes["header__about"])}>
        <h1>Про нас</h1>
      </header>

      <main className={clsx(classes["main"], classes["main__about"])}>
        <p> {mainSectionParagraphOne} </p>
        <p> {mainSectionParagraphTwo} </p>
        <p> {mainSectionParagraphThree} </p>
      </main>

      <AboutFact
        row='1/2'
        column='2/3'
        heading={factSectionHeaderOne}
        paragraph={factSectionParagraphOne}
      />
      <AboutFact
        row='2/3'
        column='2/3'
        heading={factSectionHeaderTwo}
        paragraph={factSectionParagraphTwo}
      />
      <AboutFact
        row='3/4'
        column='2/3'
        heading={factSectionHeaderThree}
        paragraph={factSectionParagraphThree}
      />

      <AboutImage row="1/2" column="3/4" src="src/assets/img/about/training.jpg" />
      <AboutImage row="2/3" column="3/4" src="src/assets/img/about/coach.avif"/>
      <AboutImage row="3/4" column="3/4" src="src/assets/img/about/individual_approach.jpg" />
    </div>
  )
}

export default AboutPage