import React from 'react'
import classes from './loader.module.scss'

export const Loader = () => (
    <div className={classes.bg}>
        <div className={classes.ldsEllipsis}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
)