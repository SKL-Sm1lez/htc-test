import React from 'react'
import classes from './comments.module.scss'
import deleteImg from '../../../img/contain/comments/delete.svg'
import { GlobalContext } from '../../../store/globalContext'

export const Comments = props => {
    const {store, deleteComment} = React.useContext(GlobalContext)

    const onClickHandler = event => {
        event.preventDefault()
        deleteComment(props.id, props.index)
    }

    return (
        <div className={classes.comments}>
            { store.isLogin
                ? props.userId === store.profile.id
                    ? <img className={classes.delete} src={deleteImg} alt={'Удалить'} onClick={event => onClickHandler(event)} />
                    : null
                : null
            }
            <p className={classes.name}>{props.nickname}</p>
            <p className={classes.text}>{props.text}</p>
        </div>
    )
    
}