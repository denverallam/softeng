import * as act from '../constants/userConstants';


const user = (state = { authData: null, isAdmin: false }, action) => {
    switch (action.type) {
        case act.LOG_IN:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { ...state, authData: action.payload, loading: false, errors: null };
        case act.REGISTER:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { ...state, authData: action.payload, loading: false, errors: null };
        case act.CHANGE_PASSWORD:
            localStorage.setItem('admin', JSON.stringify(action.payload))
            return { ...state, authData: action.payload, loading: false, errors: null };
        case act.LOG_OUT:
            localStorage.removeItem('admin');
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
};

export default user
