const initState = {
    isLoading: false
}
type StateType = typeof initState

type ChangeLoadingAC = {
    type: 'CHANGE_LOADING'
}
type ActionType = ChangeLoadingAC

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: !state.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (): ChangeLoadingAC => {
    return {type: 'CHANGE_LOADING'}
} // fix any