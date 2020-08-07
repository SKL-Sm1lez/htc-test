import React from 'react'
import classes from './channelCards.module.scss'

export const ChannelCards = props => {

    return (
        <div className={classes.channelCards}>
            
            <div>
                <img src={props.logo} alt='Logo'/>
            </div>


            <section className={classes.description}>
                <h3>{props.name}</h3>

                <section>
                    <p className={classes.Select}>{props.description.firstPlace[0]}</p>
                    <p className={classes.Select}>{props.description.firstPlace[1]}</p>
                </section>

                <section>
                    <p className={classes.Default}>{props.description.secondPlace[0]}</p>
                    <p className={classes.Default}>{props.description.secondPlace[1]}</p>
                </section>

                <section>
                    <p className={classes.Default}>{props.description.thirdPlace[0]}</p>
                    <p className={classes.Default}>{props.description.thirdPlace[1]}</p>
                </section>
            </section>
        </div>
    )
}