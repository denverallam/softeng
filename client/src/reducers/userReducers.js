import * as act from '../constants/userConstants';


const user = (state = { authData: null, isAdmin: false, message: null }, action) => {
    switch (action.type) {
        case act.USER_REQUEST:
            return { loading: true, message: null, error: null }
        case act.LOG_IN:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null };
        case act.LOGIN_ERROR:
            return { message: "Wrong username/password!" };
        case act.CHANGE_ERROR:
            return { message: "Wrong password!" };
        case act.REGISTER:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null };
        case act.CHANGE_PASSWORD:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null, success: true };
        case act.FORGOT_PASSWORD:
            return { message: action.payload, success: true };
        case act.RESET_PASSWORD:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { authData: action.payload, loading: false, message: null, success: true };
        case act.LOG_OUT:
            localStorage.removeItem('admin');
            return { authData: null, loading: false, message: null };
        default:
            return state;
    }
};

export default user
