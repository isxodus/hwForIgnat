import React from 'react'
import css from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={css.message}>
            <div className={css.avatarArea}>
                <div className={css.avatarArea2}>
                    <img className={css.avatar} src={props.avatar}/>
                </div>
            </div>
            <div className={css.messageArea}>
                <div className={css.nameOfSender}>{props.name}</div>
                <div className={css.textData}>
                    <span className={css.textArea}>{props.message}</span>
                    <span className={css.timeArea}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
