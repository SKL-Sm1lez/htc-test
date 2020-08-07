import React from 'react'
import classes from './backdrop.module.scss'

const Backdrop = props => <div className={classes.backdrop} onClick={props.onClick} />

export default Backdrop