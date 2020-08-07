import React from 'react'
import classes from './container.module.scss'

export const Container = props => (
    <div className={classes.container}>
            {props.children}
    </div>
)