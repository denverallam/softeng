import * as actions from '../constants/userConstants';
import { Admin } from '../components/Admin/User/UserData'

export const login = () => async (dispatch) => {
    try{
        const data = Admin

        localStorage.setItem('admin', JSON.stringify(data))

        dispatch({
            type: actions.LOG_IN,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.LOG_IN,
            payload: error
        })
    }
}

export const logout = () => async (dispatch) => {
    try{

        const data = {
            name: '',
            email: '',
            password: '',
            isAdmin: false
        }

        localStorage.removeItem('admin')

        dispatch({
            type: actions.LOG_OUT,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.LOG_OUT,
            payload: error
        })
    }
}