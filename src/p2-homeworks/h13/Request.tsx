import React, {useState} from "react";
import {Button, Checkbox} from "@mui/material";
import {requestApi} from "./requestApi";


export const Request = () => {
    //а в ней кнопку и чекбокс (самостоятельно создать папку и компоненты)
    const [state, setState] = useState<any>(null)
    const [checked, setChecked] = useState<boolean>(true)
    const chekedHandler = () => setChecked(!checked)
    // const dispatch = useDispatch()
    const requestHandler = () => {
        requestApi.send(checked)
            .then(data => {
                console.log('-', data)
                setState(data.errorText)
            })
            .catch(error => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
                setState(error.response ? error.response.data.errorText : error.message)
            })
    }
    return <>
        <Checkbox checked={checked} onChange={chekedHandler}/>
        <Button onClick={requestHandler}>Send</Button>
        <div>
            {state}
        </div>
    </>


    //https://neko-cafe-back.herokuapp.com/auth/test
    //
    // body: {success: true}
}