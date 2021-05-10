import * as act from '../constants/responseConstants';


const initialState = {
    responseList: [],
    response: {},
    loading: false
}

const response = (state = initialState, action) => {
    switch (action.type) {
        case act.FETCH_REQUEST:
            return { ...state, loading: true, message: null };
        case act.GET_CONTENT_RESPONSE:
            return { ...state, responseList: action.payload, loading: false, message: null};
        case act.GET_ALL_RESPONSES:
            return { ...state, responseList: action.payload, loading: false, message: null};
        case act.GET_RESPONSE:
            return { ...state, response: action.payload, loading: false, message: null };
        case act.CREATE_RESPONSE:
            return { ...state, responseList: [action.payload.response, ...state.responseList], success:true, message: null}
        case act.UPDATE_RESPONSE:
            return { ...state, responseList: state.responseList.map(response => response._id === action.payload.id ? action.payload.response : response), message: null, success:true};
        case act.DELETE_RESPONSE:
            return { ...state, responseList: state.responseList.filter(response => response._id !== action.payload), message: null };
        case act.REQUEST_ERROR:
            return { ...state, error: action.payload.response.data.message };
        default:
            return state;
    }
};

export default response
