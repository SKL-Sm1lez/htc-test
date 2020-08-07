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
} from "./types"

const handlers = {
    [HIDE_LOGIN_PAGE]: state => {return {...state, loginPage: false}},
    [SHOW_LOGIN_PAGE]: state => {return {...state, loginPage: true}},
    [CHANGE_CHECKBOX]: state => {return {...state, checkbox: !state.checkbox}},
    [CREATE_MOVIE]: (state, action) => {return {...state, movies: action.payload, movieLoading: false}},
    [AUTHORIZATHION]: (state, action) => {return {...state, isLogin: true, profile: action.payload, loginPage: false}},
    [LOGOUT]: state => {return {...state, isLogin: false, profile: {}, usersLoading: false }},
    [INPUT_NICKNAME]: (state, action) => {return {...state, profile: action.payload}},
    [USER_LOGIN]: (state, action) => {return {...state, login: action.payload}},
    [USER_PASSWORD]: (state, action) => {return {...state, password: action.payload}},
    [DELETE_COMMENT]: (state, action) => {return {...state, movies: action.payload }},
    [ADD_COMMENT]: (state, action) => {return {...state, movies: action.payload}},
    [INPUT_COMMENT]: (state, action) => {return {...state, inputComment: action.payload}},
    [AUTO_LOGIN]: (state, action) => {return {...state, autoLogin: false, profile: action.payload, isLogin: true}},
    [AUTO_LOGIN_FALSE]: state => {return {...state, autoLogin: false}},
    [SCROLL]: (state, action) => {return {...state, step: action.step, position: action.position}},
    [SEARCH_INPUT] : (state, action) => {return {...state, searchInput: action.payload}},
    DEFAULT: state => {return {...state}}
}

export const Reducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}