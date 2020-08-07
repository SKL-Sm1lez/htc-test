import React from 'react'
import classes from './movie.module.scss'
import { MovieCards } from './movieCards/movieCards'
import { GeneresCard } from './generesCards/generesCards'
import newMovie from '../../img/contain/new.png'
import { Tabs } from '../UI/tabs/tabs'
import { GlobalContext } from '../../store/globalContext'
import { Loader } from '../UI/loader/loader'
import nextImg from '../../img/contain/movieCards/next.svg'
import backImg from '../../img/contain/movieCards/back.svg'

export const Movie = () => {

    const {store, createMovies, scroll} = React.useContext(GlobalContext)
    const ratio = 300

    const scrollLeft = () => {
        if (store.step === 0) {
            const step = -4
            const position = step * ratio

            scroll(step, position)
        } else {
            const step = store.step + 1
            const position = step * ratio
    
            scroll(step, position)
        }
    }

    const scrollRight = () => {
        if (store.step === -4) {
            const step = 0
            const position = step * ratio

            scroll(step, position)
        } else {
            const step = store.step - 1
            const position = step * ratio
    
            scroll(step, position)
        }
    }

    React.useEffect(() => {
        if (store.movieLoading === true) {
            createMovies()
        }
    })

    return (
        <>
            <Tabs />
            <section className={classes.movie}>  

                <div className={classes.movieCardsTittle}>
                    <img src={newMovie} alt='New' className={classes.fire}/>
                    <p className={classes.newTittle}>Новинки</p>
                </div>
                
                <div className={classes.scrollMovie}>
                    <img className={classes.nextImg} src={nextImg} alt={'left'} onClick={scrollRight} />
                    <img className={classes.backImg} src={backImg} alt={'right'} onClick={scrollLeft}/>
                    <div className={classes.scrollView}>
                        { store.movieLoading
                            ? <Loader />
                            : <>
                                <div className={classes.movieCards} style={{transform: `translateX(${store.position}px)`, transition: 'transform 0.2s ease-out'}}>
                                    {Object.keys(store.movies).map((key, index) => {
                                        return (
                                            <MovieCards
                                                name={store.movies[key].movieDescription.name}
                                                description={store.movies[key].movieDescription.description}
                                                id={key}
                                                key={index}
                                                index={index}
                                            />
                                        )
                                    })}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </section>

            <section className={classes.generes}>
                <h2>Жанры</h2>
                <GeneresCard />
            </section>
        </>
    )
}
