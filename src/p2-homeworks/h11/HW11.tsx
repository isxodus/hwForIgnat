import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import css from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => setValue1(Math.min(Number(e.currentTarget.value), value2))
    const onChangeMaxCallback = (values: number | number[]) => {
        if (typeof values === 'number') return
        setValue1(Math.min(Number(values[0]), value2))
        setValue2(Math.max(Number(values[1]), value1))
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={css.range}>
                <span>{value1}</span>
                <SuperRange onChange={onChangeCallback} value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={css.range}>
                <span>{value1}</span>

                <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeMaxCallback}/>
                {/*// сделать так чтоб value1 и value2 изменялось*/}

                <span className={css.rightAlign}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
