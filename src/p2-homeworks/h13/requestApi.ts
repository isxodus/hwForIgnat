import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})
export const requestApi = {
    send(bool: boolean) {
        return instance.post<any>('', {success: bool})
            .then(response => response.data)
    }
}
