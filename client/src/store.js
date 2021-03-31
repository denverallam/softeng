import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import content from './reducers/contentReducers';
import user from './reducers/userReducers';
import response from './reducers/responseReducers';
import viewer from './reducers/viewerReducers';

export const reducer = combineReducers({content, response, user, viewer});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store