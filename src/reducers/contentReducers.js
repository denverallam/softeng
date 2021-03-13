import * as act from '../constants/contentConstants';


const initialState = {
    contentList:[],
    content:{}
}

const content = (state = initialState , action) => {
    switch (action.type) {
        case act.GET_ALL_CONTENT:
            return {...state, contentList: action.payload};
        case act.GET_CONTENT:
            return {...state, content: action.payload};
        case act.CREATE_CONTENT:
            return {...state, contentList: [action.payload,...state.contentList]}
        case act.UPDATE_CONTENT:
            return {...state, contentList: state.contentList.map(content => content._id === action.payload ? action.payload : content)};
        case act.DELETE_CONTENT:
            return {...state, contentList:state.contentList.filter(content => content._id !== action.payload)};
        default:
            return state;
    }
};

export default content
