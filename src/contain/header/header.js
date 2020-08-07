import React, {useContext} from 'react'
import classes from './header.module.scss'
import logo from '../../img/header/logo.svg'
import { Button } from '../../component/UI/button/button'
import { GlobalContext } from '../../store/globalContext'
import LoginPage from '../../component/loginPage/loginPage'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    const {store, showLoginPage, logout, inputNickname, rename, searchInputAction} = useContext(GlobalContext)

    const onChangeHandler = event => {
        event.preventDefault()
        inputNickname(event.target.value)
    }

    const onBlurHandler = event => {
        event.preventDefault()
        rename(event.target.value)
    }
    
    return (
        <header className={classes.header}>

            <div className={classes.logo}>
                <img src={logo} alt={'logo'}/>
                <NavLink
                    to='/movie'
                >
                    Видеосервис
                </NavLink>
            </div>
            
            <form className={classes.search}>
                <input type='text' placeholder='Поиск...' onChange={event => searchInputAction(event.target.value)}/>
                <NavLink
                    to='/search'
                >
                    Найти
                </NavLink>
            </form>

            { store.isLogin 
                ? <div className={classes.logout}>
                    <input 
                        className={classes.inputName}
                        defaultValue={store.profile.nickname}
                        onChange={event => onChangeHandler(event)}
                        onBlur={event => onBlurHandler(event)}
                    />
                    <button 
                        className={classes.logOutButton}
                        onClick={event => logout(event)}
                    >
                        Выйти
                    </button>
                </div>
                : <div className={classes.logInButton}>
                    <Button 
                        text={'Войти'}
                        onClick={showLoginPage}
                    />
                </div> 
            }
        
            { store.loginPage
                ? <LoginPage />
                : null
            }
        </header>
    )
}