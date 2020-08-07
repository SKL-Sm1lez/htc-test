import React from 'react'
import classes from './search.module.scss'
import { GlobalContext } from '../../store/globalContext'
import { Loader } from '../UI/loader/loader'
import { MovieCards } from '../movie/movieCards/movieCards'

export const Search = () => {

    const {store, createMovies} = React.useContext(GlobalContext)

    React.useEffect(() => {
        if (store.movieLoading === true) {
            createMovies()
        }
    })

    return (
        <div className={classes.search}>
            <h2>Поиск</h2>
                { store.movieLoading 
                    ? <Loader />
                    : <div className={classes.movies}>
                        {Object.keys(store.movies).map((key, index) => {
                            if (store.movies[key].movieDescription.name.toLowerCase().includes(store.searchInput.toLowerCase())) {
                                return (
                                    <div className={classes.moviesBlock} key={index}>
                                        <MovieCards
                                            name={store.movies[key].movieDescription.name}
                                            description={store.movies[key].movieDescription.description}
                                            id={key}
                                            index={index}
                                        />
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })}
                    </div>
                }
        </div>
    )
}