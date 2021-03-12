import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import content from './reducers/contentReducers';
import response from './reducers/responseReducers';

export const reducer = combineReducers({content, response});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store