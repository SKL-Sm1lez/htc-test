import React from 'react'
import classes from './movieComments.module.scss'
import back from '../../img/contain/comments/back-button.svg'
import { Button } from '../UI/button/button'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../store/globalContext'
import { Loader } from '../UI/loader/loader'
import { Comments } from './comments/comments'

// image
import image1 from '../../img/contain/movieCards/card1.png'
import image2 from '../../img/contain/movieCards/card2.png'
import image3 from '../../img/contain/movieCards/card3.png'
import image4 from '../../img/contain/movieCards/card4.png'
import image5 from '../../img/contain/movieCards/card5.png'
import image6 from '../../img/contain/movieCards/card6.png'
import image7 from '../../img/contain/movieCards/card7.png'
import image8 from '../../img/contain/movieCards/card8.png'

let image = null

const createImg = id => {
    const arrObj = {
        '-MDxzxRqSem7ybi-OGi0': image1,
        '-MDy-sY5IexgCNIJ9DoU': image2,
        '-MDy0cS6Llth0Qzefgn2': image3,
        '-MDy31JkaZtYLIJ_Scnj': image4,
        '-ME53JeJxLP5Ivx6DZJm': image5,
        '-ME53Jf-CTU3k3B_FVEH': image6,
        '-ME53JfzrzgKad7zQ3mF': image7,
        '-ME53JgByS5TcAS7J8MO': image8
    }

    Object.keys(arrObj).forEach(key => {
        if (key === id) {
            image = arrObj[key]
        }
    })
}

export const MovieComments = props => {

    const id = props.match.params.id
    const {store, createMovies, inputComment, addComment} = React.useContext(GlobalContext)

    createImg(props.match.params.id)

    const onClickHandler = event => {
        event.preventDefault()

        if (store.isLogin === true) {
            if ( store.inputComment === "") {
                alert('Введите комментарий...')
            } else {
                addComment(
                    id, 
                    store.movies[id].comments.length, 
                    store.profile.id,
                    store.profile.nickname,
                    store.inputComment
                )

                event.target.form.elements[0].value = ""
            }
        } else { 
            alert('Войдите в аккаунт')
        }
    }

    React.useEffect(() => {
        if (store.movieLoading === true) {
            createMovies()
        }
    })

    return (
        <div className={classes.movieComments}>
            
            { store.movieLoading === true
                ? <Loader />
                : <>
                    <section className={classes.movie}>
                        <NavLink to='/movie'>
                            <img className={classes.backButton} src={back} alt='back'/>
                        </NavLink>
                        <img className={classes.movieImg} src={image} alt='movie' />
                        <div>
                            <div className={classes.descriptionMovie}>
                                <div className={classes.typesPoistion}>
                                    <p className={classes.types}>Название:</p>
                                    <p className={classes.types}>Страна:</p>
                                    <p className={classes.types}>Жанр:</p>
                                </div>
                                <div>
                                    <p className={classes.typesName}>{store.movies[id].movieDescription.name}</p>
                                    <p className={classes.typesText}>{store.movies[id].movieDescription.country}</p>
                                    <p className={classes.typesText}>{store.movies[id].movieDescription.gener}</p>
                                </div>
                            </div>
                            <p className={classes.descriptionText}>
                                {store.movies[id].movieDescription.description}
                            </p>
                        </div>
                    </section>

                    <section className={classes.comments}>
                        <h3 className={classes.commentTittle}>Комментарии</h3>
                        <form className={classes.commentForm}>
                            { store.isLogin
                                ? <textarea className={classes.areaSuccess}
                                    type='text' 
                                    placeholder='Введите комментарий...' 
                                    maxLength={320}
                                    onChange={event => inputComment(event.target.value)}
                                />
                                : <textarea className={classes.areaError}
                                    type='text' 
                                    placeholder='Введите комментарий...' 
                                    maxLength={320}
                                    onChange={event => inputComment(event.target.value)}
                                />
                            }
                            <div>
                                <Button text='Опубликовать'
                                onClick={event => onClickHandler(event)}
                            />
                            </div>
                        </form>

                        <div className={classes.reverseColumn}>
                            {
                            Object.keys(store.movies[id].comments).map((key, index) => {
                                if (store.movies[id].comments[key] === null || key === '0') {
                                    return null
                                } else {
                                    return (
                                        <Comments 
                                        text={store.movies[id].comments[key].text}
                                        userId={store.movies[id].comments[key].userId}
                                        nickname={store.movies[id].comments[key].nickname}
                                        key={index}
                                        index={key}
                                        id={id}
                                    />
                                    )
                                }
                            })}
                        </div>
                    </section>
                </>
            }
        </div>
    )
}