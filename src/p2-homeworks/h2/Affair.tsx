import React from 'react'
import {AffairType} from "./HW2";
import css from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={css.affairGrid}>
            <div className={css[props.affair.priority + 'Task']}>{props.affair.priority}</div>
            <div className={css[props.affair.priority + 'Task']}>{props.affair.name}</div>


            <button className={css.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
