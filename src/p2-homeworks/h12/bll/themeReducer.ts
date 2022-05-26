import {themeName} from "../HW12";

type SetTheme = {
    type: "SET-THEME"
    themeName: themeName
}
type ActionType = SetTheme

type ThemeStateType = {
    themeName: themeName
}

const initState: ThemeStateType = {
    themeName: 'dark'
};

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case  "SET-THEME":
            return {themeName: action.themeName};
        default:
            return state;
    }
};

export const changeThemeC = (themeName: themeName): ActionType => {
    return {type: "SET-THEME", themeName: themeName}
}; // fix any