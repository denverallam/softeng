import * as actions from '../constants/responseConstants';
import api from '../api/server'

export const getResponses = content_id => async (dispatch) => {

    try {
        const { data } = await api.get(`/response/${content_id}`);

        dispatch({
            type: actions.GET_RESPONSES,
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
        const { data } = await api.post(`/response/${content_id}`, response);

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
        const { data } = await api.patch(`/response/${id}`, newResponse);

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
        const {data} = await api.delete(`/response/${id}`)

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