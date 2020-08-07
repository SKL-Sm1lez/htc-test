import React from 'react'
import classes from './tabs.module.scss'
import {NavLink} from 'react-router-dom'

export const Tabs = () => (
    <>
        <ul className={classes.tabs}>
            <li>
                <NavLink 
                    to={'/movie'}
                    activeClassName={classes.select}
                >
                    Фильмы
                </NavLink>
            </li>

            <li>
                <NavLink 
                    to={'/channel'}
                    activeClassName={classes.select}
                >
                    Телеканалы
                </NavLink>
            </li>
        </ul>
    </>
)

        