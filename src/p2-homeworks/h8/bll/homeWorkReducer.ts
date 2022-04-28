import {UserType} from "../HW8";

type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}
type CheckAT = {
    type: 'check'
    payload: number
}
type HomeWorkReducer = SortAT | CheckAT

export const homeWorkReducer = (state: Array<UserType>, action: HomeWorkReducer): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') return [...state].sort((a, b) => a.age - b.age)
            else return [...state].sort((a, b) => b.age - a.age)
        }
        case 'check': {
            return [...state].filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}