import React, { useReducer } from 'react'
import { GlobalContext } from './globalContext'
import { Reducer } from './reducer'
import axios from 'axios'
import { 
    HIDE_LOGIN_PAGE, 
    SHOW_LOGIN_PAGE, 
    CHANGE_CHECKBOX,
    CREATE_MOVIE,
    AUTHORIZATHION,
    LOGOUT,
    INPUT_NICKNAME,
    USER_LOGIN,
    USER_PASSWORD,
    DELETE_COMMENT,
    ADD_COMMENT,
    INPUT_COMMENT,
    AUTO_LOGIN,
    AUTO_LOGIN_FALSE,
    SCROLL,
    SEARCH_INPUT
} from './types'

export const Store = ({children}) => {

    const initialState = {
        loginPage: false,
        checkbox: false,
        movieLoading: true,
        usersLoading: true,
        isLogin: false,
        movies: {},
        profile: {},
        users: {},
        login: null,
        password: null,
        inputComment: "",
        autoLogin: true,
        step: 0,
        position: 0,
        searchInput: ""
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    const showLoginPage = () => dispatch({type: SHOW_LOGIN_PAGE})
    const hideLoginPage = () => dispatch({type: HIDE_LOGIN_PAGE})
    const changeCheckbox = () => dispatch({type: CHANGE_CHECKBOX})
    const createMoviesAction = payload => ({type: CREATE_MOVIE, payload})
    const authorizathionAction = payload => ({type: AUTHORIZATHION, payload})
    const logoutAction = () => ({type: LOGOUT})
    const inputNicknameAction = payload => ({type: INPUT_NICKNAME, payload})
    const userLogin = payload => dispatch({type: USER_LOGIN, payload})
    const userPassword = payload => dispatch({type: USER_PASSWORD, payload})
    const deleteCommentAction = payload => ({type: DELETE_COMMENT, payload})
    const addCommentAction = payload => ({type: ADD_COMMENT, payload})
    const inputComment = payload => dispatch({type: INPUT_COMMENT, payload})
    const autoLoginAction = payload => ({type: AUTO_LOGIN, payload})
    const autoLoginFalse = () => dispatch({type: AUTO_LOGIN_FALSE})
    const scroll = (step, position) => dispatch({type: SCROLL, step, position})
    const searchInputAction = payload => dispatch({type: SEARCH_INPUT, payload})

    const autoLogin = localStore => {
        const profile = {...localStore}
        profile.id = +profile.id
        
        return (
            dispatch(autoLoginAction(profile))
        )
    }

    const addComment = async (id, position, userId, nickname, text) => {
        const comment = {
            nickname,
            text,
            userId
        }

        await axios.put(`https://react-htc-test.firebaseio.com/movie/${id}/comments/${position}.json`, JSON.stringify(comment))
            .then(() => {
                const obj = {...state.movies}
                obj[id].comments.push(comment)

                return (
                    dispatch(addCommentAction(obj))
                )
            })
    }

    const deleteComment = async (id, index) => {
        await axios.delete(`https://react-htc-test.firebaseio.com/movie/${id}/comments/${index}.json`)
            .then(() => {
                const obj = {...state.movies}
                obj[id].comments.splice(index, 1)

                return (
                    dispatch(deleteCommentAction(obj))
                )
            })
        
    }

    const rename = async value => {
        await axios.put(`https://react-htc-test.firebaseio.com/users/${state.profile.path}/nickname.json`, JSON.stringify(value))
        
        if (localStorage.length !== 0) {
            localStorage.setItem('nickname', value)
        }
        sessionStorage.setItem('nickname', value)
    }

    const inputNickname = value => {
        const profile = {...state.profile}
        profile.nickname = value

        return (
            dispatch(inputNicknameAction(profile))
        )
    }

    const logout = event => {
        event.preventDefault()
        localStorage.clear()
        sessionStorage.clear()
        return (
            dispatch(logoutAction())
        )
    }

    const createMovies = () => {
        const movies = {}

        const movieCards = async () => {
            try {
                const response = await axios.get('https://react-htc-test.firebaseio.com/movie.json')

                Object.keys(response.data).forEach((key) => {
                    movies[key] = response.data[key]
                })

                return ( 
                    dispatch(createMoviesAction(movies)) 
                )
            } catch (e) {
                console.log(e)
            }
        }
        movieCards(movies)
    }

    const usersList = (login, password) => {
        let users = {}
        let profile = {}
        let logged = false

        try {
            axios.get('https://react-htc-test.firebaseio.com/users.json')
                .then(response => {
                    Object.keys(response.data).forEach((key) => {
                        users[key] = response.data[key]
                    })

                    Object.keys(users).forEach((key, index) => {
                        if (users[key].login === login) {
                            if (users[key].password === password) {
                                profile = {
                                    nickname: users[key].nickname,
                                    id: users[key].id,
                                    path: key
                                }

                                if (state.checkbox === true) { 
                                    localStorage.setItem('nickname', profile.nickname)
                                    localStorage.setItem('id', profile.id)
                                    localStorage.setItem('path', key)
                                } else {
                                    localStorage.clear()
                                    sessionStorage.setItem('nickname', profile.nickname)
                                    sessionStorage.setItem('id', profile.id)
                                    sessionStorage.setItem('path', key)
                                }

                                logged = true

                                return (
                                    dispatch(authorizathionAction(profile))
                                )
                            } else {
                                alert('Неверный пароль')
                            }
                        }
                    })
                    if (logged === false) {
                        alert('Неверный логин')
                    }

                    users = {}
                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <GlobalContext.Provider value={{
            showLoginPage,
            hideLoginPage,
            changeCheckbox,
            createMovies,
            usersList,
            logout,
            inputNickname,
            rename,
            userLogin,
            userPassword,
            deleteComment,
            addComment,
            inputComment,
            autoLogin,
            autoLoginFalse,
            scroll,
            searchInputAction,
            store: state
        }}>
            {children}
        </GlobalContext.Provider>
    )
}