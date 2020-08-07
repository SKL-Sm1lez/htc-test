import React from 'react'
import classes from './content.module.scss'
import { Movie } from '../../component/movie/movie'
import { Channel } from '../../component/channel/channel'
import {Route, Switch, Redirect} from 'react-router-dom'
import {MovieComments} from '../../component/movieComments/movieComments'
import { Search } from '../../component/search/search'

export const Content = () => (
    <div className={classes.content}>
            <Switch>
                <Route path='/movie' exact component={Movie} />
                <Route path='/channel' component={Channel} />
                <Route path='/search' component={Search} />
                <Route path='/movie/:id' component={MovieComments} />
                <Redirect to='/movie' />
            </Switch>
    </div>
)