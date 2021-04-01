import * as act from '../constants/userConstants';


const user = (state = { authData: null, isAdmin: false, message: null }, action) => {
    switch (action.type) {
        case act.USER_REQUEST:
            return { loading: true, message: null, error: null }
        case act.LOG_IN:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null };
        case act.LOGIN_ERROR:
            return { message: action.payload.response.data.message };
        case act.REGISTER:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null };
        case act.REGISTER_ERROR:
            return { message: action.payload.response.data.message };
        case act.CHANGE_PASSWORD:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null, success: true };
        case act.CHANGE_ERROR:
            return { message: action.payload.response.data.message };
        case act.FORGOT_PASSWORD:
            return { success: action.payload.success, message: action.payload.data  };
        case act.FORGOT_ERROR:
            return { message: action.payload.response.data.message };
        case act.RESET_PASSWORD:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null, success: true };
        case act.LOG_OUT:
            localStorage.removeItem('admin');
            return { authData: null, loading: false, message: null };
        case act.CLEAR_ERROR:
            return {message: null, loading: false, success: false}
        default:
            return state;
    }
};

export default user
