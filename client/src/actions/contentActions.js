import * as actions from '../constants/contentConstants';
import * as API from '../api/index'

export const getContentByCategory = (category) => async (dispatch) => {
    
    try{

        dispatch({
            type: actions.FETCH_REQUEST
        })

        const {data} = await API.fetchContentByCategory(category)

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

export const getAllContent = () => async (dispatch) => {
    
    try{

        dispatch({
            type: actions.FETCH_REQUEST
        })

        const {data} = await API.fetchAllContent()
        // let link = '/content/'

        // if (category){
        //     link = `/content/${category}`
        // }

        // const {data} = await api.get(link)

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

        const {data} = await API.fetchContent(id)

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
        // const {data} = await api.post(`/content/`,newContent)
        const {data} = await API.createContent(newContent)

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
        // const {data} = await api.patch(`/content/${id}`, newContent)
        const {data} = await API.updateContent(id, newContent)

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
        const {data} = await API.deleteContent(id)

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