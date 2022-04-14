import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error === 'empty' ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.inputContainer}>
            <input value={name} onChange={setNameCallback} className={s.input + ' ' + inputClass}/>
            <span className={s.errorMessage}>{error}</span>
            <button className={s.btn} onClick={addUser}>add</button>
            <span className={s.info}>Total number of users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
