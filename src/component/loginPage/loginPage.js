import React, {useContext} from 'react'
import classes from './loginPage.module.scss'
import Backdrop from '../UI/backdrop/backdrop'
import { Button } from '../UI/button/button'
import { GlobalContext } from '../../store/globalContext'
import imgCheck from "../../img/loginPage/check.svg"

const LoginPage = () => {
    const {store, hideLoginPage, changeCheckbox, usersList, userLogin, userPassword} = useContext(GlobalContext)

    const onChangeEmailHandler = (event) => {
        event.preventDefault()
        userLogin(event.target.value)
    }

    const onChangePasswordHandler = (event) => {
        event.preventDefault()
        userPassword(event.target.value)
    }

    const onClickHandler = (event) => {
        event.preventDefault()
        usersList(store.login, store.password)
    }

    return (
        <>
            <div className={classes.loginPage}>
                    <h3>Вход</h3>

                    <form>
                        <input 
                            type='text' 
                            placeholder='Логин'
                            onChange={(event) => onChangeEmailHandler(event)}    
                        />
                        <input 
                            type='password' 
                            placeholder='Пароль'
                            onChange={(event) => onChangePasswordHandler(event)}  
                        />

                        <div className={classes.checkbox} onClick={changeCheckbox}>
                            <div className={classes.box}>
                                { store.checkbox
                                    ? <img src={imgCheck} alt={'check'} className={classes.check}/>
                                    : null
                                }
                            </div>
                            <p className={classes.text}>Запомнить</p>
                        </div>

                        <Button 
                            text='Войти'
                            onClick={(event) => onClickHandler(event)}
                        />
                    </form>
            </div>
            
            <Backdrop
                onClick={hideLoginPage}
            />
        </>
    )
}

export default LoginPage