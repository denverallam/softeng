import Response from './Response'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getResponses, updateResponse, createResponse } from '../../actions/responseActions';
import { deleteResponse } from '../../actions/responseActions'
import ResponseForm from './ResponseForm';

const ResponseList = ({ match }) => {

    const contentId = match.params.id

    const dispatch = useDispatch()
    const response = useSelector(state => state.response.responseList)

    const [responseList, setResponseList] = useState(response)
    const [responseId, setResponseId] = useState("")

    useEffect(() => {
        dispatch(getResponses(contentId))
        setResponseList(response)
    },[])

    useEffect(() => {
        dispatch(getResponses(contentId))
        setResponseList(response)
    },[responseList])


    const deleteItem = (id) => {
        dispatch(deleteResponse(id))
    }

    const updateItem = (id, newItem) => {
        dispatch(updateResponse(id, newItem))
    }

    const addItem = (id, item) => {
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
