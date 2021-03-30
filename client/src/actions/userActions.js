import * as actions from '../constants/userConstants';
import * as API from '../api/index'

export const login = (formData, state, history) => async dispatch => {
    try {
        const { data } = await API.login(formData);
        dispatch({
            type: actions.LOG_IN,
            payload: data
        });
        history.push(`${state?.from.pathname || '/admin'}`)

    } catch (error) {
        console.log(error);
    }
}

export const register = (formData, history) => async dispatch => {
    try {
        const { data } = await API.register(formData);
        dispatch({
            type: actions.REGISTER,
            payload: data
        });
        history.push('/admin')

    } catch (error) {
        console.log(error);
    }
}

export const changePassword = (formData, history) => async dispatch => {
    try {
        const { data } = await API.changePassword(formData);

        dispatch({
            type: actions.CHANGE_PASSWORD,
            payload: data
        });
        history.push('/admin')

    } catch (error) {
        console.log(error);
        alert("Wrong password!")
    }
}


export const logout = () => async dispatch => {
    try {
        dispatch({
            type: actions.LOG_OUT
        });
    } catch (error) {
        console.log(error);
    }
}