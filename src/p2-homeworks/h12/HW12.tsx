import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];
//создал таким образом тип
export type themeName = typeof themes[number];

function HW12() {
    //const theme = 'some';
    // useSelector
    // useDispatch, onChangeCallback
    const theme = useSelector<AppStoreType, themeName>(state => state.theme.themeName)
    const dispatch = useDispatch()
    const changeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChange={changeTheme}/>

            <hr/>
        </div>
    );
}

export default HW12;
