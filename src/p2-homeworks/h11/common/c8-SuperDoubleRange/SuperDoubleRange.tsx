import React from 'react'
import {Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange: (values: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handler = (event: Event, newValue: number | number[]) => onChangeRange(newValue)

    return (
        <>
            <Slider value={value} onChange={handler}/>
        </>
    )
}

export default SuperDoubleRange
