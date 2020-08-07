import React from 'react'
import classes from './generesCards.module.scss'

// image
import comedy from '../../../img/contain/generesCards/comedy.svg'
import dramas from '../../../img/contain/generesCards/dramas.svg'
import fantasctic from '../../../img/contain/generesCards/fantasctic.svg'
import horror from '../../../img/contain/generesCards/horror.svg'


export const GeneresCard = () => (
    <div className={classes.generesCard}>
        <section className={classes.comedyCard}>
            <img src={comedy} alt={'Generes preview'}/>
            <p>Комедии</p>
            <div className={classes.comedyGradient} />
            <div className={classes.comedyBackground} />
        </section>

        <section className={classes.dramasCard}>
            <img src={dramas} alt={'Generes preview'}/>
            <p>Драмы</p>
            <div className={classes.dramasGradient} />
            <div className={classes.dramasBackground} />
        </section>

        <section className={classes.fantasticCard}>
            <img src={fantasctic} alt={'Generes preview'}/>
            <p>Фантастика</p>
            <div className={classes.fantasticGradient} />
            <div className={classes.fantasticBackground} />
        </section>

        <section className={classes.horrorCard}>
            <img src={horror} alt={'Generes preview'}/>
            <p>Ужасы</p>
            <div className={classes.horrorGradient} />
            <div className={classes.horrorBackground} />
        </section>
    </div>
)