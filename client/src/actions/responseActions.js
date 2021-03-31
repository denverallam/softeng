import * as actions from '../constants/responseConstants';
import * as api from '../api/index'

export const getAllResponses = () => async (dispatch) => {

    try {
        
        const { data } = await api.fetchAllResponses()

        dispatch({
            type: actions.GET_ALL_RESPONSES,
            payload: data
        });
        
    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const getResponses = content_id => async (dispatch) => {

    try {
        
        const { data } = await api.fetchResponseByContent(content_id)

        dispatch({
            type: actions.GET_CONTENT_RESPONSE,
            payload: data
        });
    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const getResponse = (response_id) => async (dispatch) => {

    try {
        const { data } = await api.fetchResponse(response_id)

        dispatch({
            type: actions.GET_RESPONSE,
            payload: data
        });
    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const createResponse = (content_id, response) => async (dispatch) => {
    try {
        const { data } = await api.createResponse(content_id,response)

        dispatch({
            type: actions.CREATE_RESPONSE,
            payload: data
        });
    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const updateResponse = (id, newResponse) => async (dispatch) => {
    try {
        const { data } = await api.updateResponse(id, newResponse);

        dispatch({
            type: actions.UPDATE_RESPONSE,
            payload: data
        });

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const deleteResponse = (id) => async (dispatch) => {
    try{
        const {data} = await api.deleteResponse(id)

        dispatch({
            type: actions.DELETE_RESPONSE,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}