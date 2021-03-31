import * as actions from '../constants/viewerConstants'
import * as api from '../api/index'

export const login = formData => async dispatch => {

    try{
        const {data} = await api.viewerLogin(formData)

        dispatch({
            type: actions.LOG_IN,
            payload: data
        })
    }
    catch(error){
        console.log(error)
    }
}

export const logout = () => async dispatch => {

    try{

        dispatch({
            type: actions.LOG_OUT,
            payload: null
        })
    }
    catch(error){
        console.log(error)
    }
}