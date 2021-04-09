import * as actions from '../constants/responseConstants';
import api from '../api/server'
import * as API from '../api/index'

export const getAllResponses = () => async (dispatch) => {

    try {
        
        // const { data } = await api.get(`/response`);
        const {data} = await API.fetchAllResponses()

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
        
        // const { data } = await api.get(`/response/${content_id}`);
        const {data} = await API.fetchResponseByContent(content_id)

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
        // const { data } = await api.get(`/response/r/${response_id}`);
        const {data} = await API.fetchResponse(response_id)

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
        // const { data } = await api.post(`/response/${content_id}`, response);
        const {data} = await API.createResponse(content_id, response)

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
        // const { data } = await api.patch(`/response/${id}`, newResponse);
        const {data} = await API.updateResponse(id, newResponse)

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
        // const {data} = await api.delete(`/response/${id}`)
        const {data} = await API.deleteResponse(id)


        dispatch({
            type: actions.DELETE_RESPONSE,
            payload: id
        })

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}