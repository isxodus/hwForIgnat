import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import {UniversalEditableSpan} from "../../UniversalEditableSpan/UniversalEditableSpan";
import {Box, Grid} from "@mui/material";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {

        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
        // const value = localStorage.getItem('editable-span-value')
        // if (value) setValue(JSON.parse(value))
    }

    const mySpanHandler = (text: string) => {
        setValue(text)
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    autoFocus
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />

            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <UniversalEditableSpan text={value} onEntityFunction={mySpanHandler} placeholder={"type something"}/>
            <hr/>
        </div>
    )
}

export default HW6
