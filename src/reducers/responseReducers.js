import * as act from '../constants/responseConstants';


const initialState = {
    responseList: [],
    response: {}
}

const response = (state = initialState, action) => {
    switch (action.type) {
        case act.GET_RESPONSES:
            return { ...state, responseList: action.payload };
        case act.GET_RESPONSE:
            return { ...state, response: action.payload };
        case act.CREATE_RESPONSE:
            return { ...state, responseList: [action.payload, ...state.responseList] }
        case act.UPDATE_RESPONSE:
            return { ...state, responseList: state.responseList.map(response => response._id === action.payload ? action.payload : response) };
        case act.DELETE_RESPONSE:
            return { ...state, responseList: state.responseList.filter(response => response._id !== action.payload) };
        default:
            return state;
    }
};

export default response
