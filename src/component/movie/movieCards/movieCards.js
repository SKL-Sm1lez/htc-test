import React from 'react'
import classes from './movieCards.module.scss'
import { NavLink } from 'react-router-dom'


// image
import image1 from '../../../img/contain/movieCards/card1.png'
import image2 from '../../../img/contain/movieCards/card2.png'
import image3 from '../../../img/contain/movieCards/card3.png'
import image4 from '../../../img/contain/movieCards/card4.png'
import image5 from '../../../img/contain/movieCards/card5.png'
import image6 from '../../../img/contain/movieCards/card6.png'
import image7 from '../../../img/contain/movieCards/card7.png'
import image8 from '../../../img/contain/movieCards/card8.png'

export const MovieCards = props => {

    const imgArr = [image1, image2, image3, image4, image5, image6, image7, image8]

    return (
        <div className={classes.movieCard}>
            <NavLink to={`/movie/${props.id}`}>
                <div className={classes.card}>
                    <p className={classes.description}>{props.description}</p>
                    <div className={classes.background} />
                    <img src={imgArr[props.index]} alt={'Film preview'}/>
                </div>

                <p className={classes.filmName}>{props.name}</p>
            </NavLink>
        </div>
    )
}