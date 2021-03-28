import * as actions from '../constants/contentConstants';
import api from '../api/server'

export const getAllContent = (category) => async (dispatch) => {
    
    try{

        dispatch({
            type: actions.FETCH_REQUEST
        })

        let link = '/content/'

        if (category){
            link = `/content/${category}`
        }

        const {data} = await api.get(link)

        dispatch({
            type: actions.GET_ALL_CONTENT,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}


export const getContent = (id) => async (dispatch) => {
    try{

        dispatch({
            type: actions.FETCH_REQUEST
        })

        const {data} = await api.get(`/content/post/${id}`)

        dispatch({
            type: actions.GET_CONTENT,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const createContent = (newContent) => async (dispatch) => {

    try{
        const {data} = await api.post(`/content/`,newContent)

        dispatch({
            type: actions.CREATE_CONTENT,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const updateContent = (id, newContent) => async (dispatch) => {

    try{
        const {data} = await api.patch(`/content/${id}`, newContent)

        dispatch({
            type: actions.UPDATE_CONTENT,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }
}

export const deleteContent = (id) =>async (dispatch) => {
    try{
        const {data} = await api.delete(`/content/${id}`)

        dispatch({
            type: actions.DELETE_CONTENT,
            payload: data
        })

    } catch (error){
        dispatch({
            type: actions.REQUEST_ERROR,
            payload: error
        })
    }

}