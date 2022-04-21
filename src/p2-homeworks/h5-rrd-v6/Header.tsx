import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import css from "./Header.module.css"

function Header() {
    return (
        <div className={css.mySidenav}>
            <span>
                <NavLink className={css.menu} to={PATH.PRE_JUNIOR}>pre_junior</NavLink>
                <NavLink className={css.menu} to={PATH.JUNIOR}>junior</NavLink>
                <NavLink className={css.menu} to={PATH.JUNIOR_PLUS}>junior+</NavLink>
            </span>
        </div>
    )
}

export default Header
