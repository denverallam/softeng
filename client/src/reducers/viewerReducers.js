import * as act from '../constants/viewerConstants'

const viewer = (state = {viewer:null}, action) => {
    switch(action.type){
        case act.LOG_IN:
                localStorage.setItem('user', JSON.stringify(action.payload))
                return {...state, viewer:action.payload}
        case act.LOG_OUT:
                localStorage.removeItem('user')
                return {...state, viewer:action.payload}
        default:
            return state
    }
}
export default viewer