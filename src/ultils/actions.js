import { CONST } from "./reducer";

export const AddPoint = payload =>({
    type: CONST.POINT,
    payload
})
export const SetLoading = payload =>({
    type:CONST.LOADING,
    payload
})
export const SetDarkmode = payload =>({
    type:CONST.DARKMODE,
    payload
})
export const SetOpenMenu = payload =>({
    type:CONST.OPENMENU,
    payload
})