import * as act from '../constants/contentConstants';


const initialState = {
    contentList: [],
    content: {},
    error: '',
    loading: false
}

const content = (state = initialState, action) => {
    switch (action.type) {
        case act.FETCH_REQUEST:
            return { ...initialState,  loading: true };
        case act.GET_ALL_CONTENT:            
            return { ...state, contentList: action.payload.contentList, loading: false };
        case act.GET_CATEGORY_CONTENT:
            return { ...state, contentList: action.payload.contentList, loading: false };
        case act.GET_CONTENT:
            return { ...state, content: action.payload.content, loading: false };
        case act.CREATE_CONTENT:
            return { ...state, contentList: [action.payload.content, ...state.contentList], success:true }
        case act.UPDATE_CONTENT:
            return { ...state, contentList: state.contentList.map(content => content._id === action.payload.id ? action.payload.content : content) };
        case act.DELETE_CONTENT:
            return { ...state, contentList: state.contentList.filter(content => content._id !== action.payload.id) };
        case act.REQUEST_ERROR:
            return { ...state, error: action.payload.response.data.message };
        default:
            return state;
    }
};

export default content
