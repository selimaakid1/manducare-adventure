import { SET_ALERT, REMOVE_ALERT } from './types'
import { v4 as uuid } from "uuid";


export const setAlert = (msg, type , id) => dispatch => {
    // const id = uuid()

    dispatch({
        type: SET_ALERT,
        payload: { msg, type, id }
    })
}

export const removeAlert = id => dispatch => {
    dispatch({
        type: REMOVE_ALERT,
        payload: id
    })
}