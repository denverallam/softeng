import * as act from '../constants/contentConstants';


const initialState = {
    contentList: [],
    content: {},
    error: {},
    loading: false
}

const content = (state = initialState, action) => {
    switch (action.type) {
        case act.FETCH_REQUEST:
            return { ...initialState,  loading: true };
        case act.GET_ALL_CONTENT:
        case act.GET_CATEGORY_CONTENT:
            return { ...state, contentList: action.payload, loading: false };
        case act.GET_CONTENT:
            return { ...state, content: action.payload, loading: false };
        case act.CREATE_CONTENT:
            return { ...state, contentList: [action.payload, ...state.contentList] }
        case act.UPDATE_CONTENT:
            return { ...state, contentList: state.contentList.map(content => content._id === action.payload ? action.payload : content) };
        case act.DELETE_CONTENT:
            return { ...state, contentList: state.contentList.filter(content => content._id !== action.payload) };
        case act.REQUEST_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default content
