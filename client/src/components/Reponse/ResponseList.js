import Response from './Response'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getResponses, updateResponse, createResponse } from '../../actions/responseActions';
import { deleteResponse } from '../../actions/responseActions'
import ResponseForm from './ResponseForm';

const ResponseList = ({ contentId }) => {

    const dispatch = useDispatch()
    const response = useSelector(state => state.response.responseList)

    const [responseList, setResponseList] = useState(response)
    const [responseId, setResponseId] = useState("")

    useEffect(() => {
        setResponseList(response)
        dispatch(getResponses(contentId))
    },[responseList])


    console.log('response', response)
    console.log('responseList', responseList)

    const deleteItem = (id) => {
        setResponseList(response.filter(res => res._id !== id))
        dispatch(deleteResponse(id))
    }

    const updateItem = (id, newItem) => {
        setResponseList(response.map(res => res._id === id ? newItem : res))
        dispatch(updateResponse(id, newItem))

    }

    const addItem = (id, item) => {
        setResponseList([...response, item])
        dispatch(createResponse(id, item))
    }

    return (
        <div>
            <ResponseForm contentId={contentId} setResponseId={setResponseId} responseId={responseId} createResponse={addItem} updateResponse={updateItem} />
            <ListGroup className="container">
                {
                    response.map(response => (
                        <ListGroupItem key={response._id} className="border-0">
                            <Response response={response} deleteResponse={deleteItem} setResponseId={setResponseId} />
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div >
    )
}

export default ResponseList
