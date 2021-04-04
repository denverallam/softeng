import * as actions from '../constants/userConstants';
import * as API from '../api/index'

export const login = (formData, state, history) => async dispatch => {
    try {

        dispatch({
            type: actions.USER_REQUEST
        });

        const { data } = await API.login(formData);
        dispatch({
            type: actions.LOG_IN,
            payload: data
        });

        history.push(`${state?.from.pathname || '/admin'}`)

    } catch (error) {
        dispatch({
            type: actions.LOGIN_ERROR,
            payload: error
        })
    }
}

export const register = (formData, history) => async dispatch => {
    try {

        dispatch({
            type: actions.USER_REQUEST
        });

        const { data } = await API.register(formData);
        dispatch({
            type: actions.REGISTER,
            payload: data
        });
        history.push('/admin' )

    } catch (error) {
        dispatch({
            type: actions.REGISTER_ERROR,
            payload: error
        })
    }
}

export const changePassword = (formData, history) => async dispatch => {
    try {

        const { data } = await API.changePassword(formData);
        

        dispatch({
            type: actions.CHANGE_PASSWORD,
            payload: data
        });
        dispatch({
            type: actions.LOG_OUT
        });
        history.push('/admin')
        
    } catch (error) {
        dispatch({
            type: actions.CHANGE_ERROR,
            payload: error
        });
    }
}

export const forgotPassword = (email) => async dispatch => {
    try {

        dispatch({
            type: actions.USER_REQUEST
        });

        const { data } = await API.forgotPassword(email);

        dispatch({
            type: actions.FORGOT_PASSWORD,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actions.FORGOT_ERROR,
            payload: error
        });
    }
}
export const resetPassword = (formData, history, token) => async dispatch => {
    try {

        dispatch({
            type: actions.USER_REQUEST
        });

        const { data } = await API.resetPassword(formData , token);

        dispatch({
            type: actions.RESET_PASSWORD,
            payload: data
        });
        dispatch({
            type: actions.LOG_OUT
        });
        history.push('/admin' )

    } catch (error) {
        console.log(error)
    }
}


export const logout = () => async dispatch => {
    try {

        dispatch({
            type: actions.USER_REQUEST
        });

        dispatch({
            type: actions.LOG_OUT
        });
    } catch (error) {
        console.log(error);
    }
}

export const clearErrors= () => async dispatch => {
    dispatch({
        type: actions.CLEAR_ERROR
    })
}