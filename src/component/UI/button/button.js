import React from 'react'
import classes from './button.module.scss'

export const Button = props => {
    return (
        <button 
            className={classes.button}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}