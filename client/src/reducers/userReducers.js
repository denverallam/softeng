import * as act from '../constants/userConstants';

const initialState = {
    isAdmin: false,
    name: '',
    email: '',
    password: ''
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case act.LOG_IN:
            return action.payload
        case act.LOG_OUT:
            return action.payload
        case act.CHANGE_PASSWORD:
            return action.payload
        default:
            return state
    }
};

export default user
