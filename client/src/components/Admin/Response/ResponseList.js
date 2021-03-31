import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Response from './Response';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import Load from '../../Content/Load';
import Dashboard from '../Dashboard';
import { getAllResponses, deleteResponse } from '../../../actions/responseActions';

const ResponseList = () => {

    const dispatch = useDispatch()
    const response = useSelector(state => state.response.responseList)
    const loading = useSelector(state => state.response.loading)
    const [responseList, setResponseList] = useState(response)

    const deleteItem = (id) => {
        setResponseList(responseList.filter(response => response._id !== id))
        dispatch(deleteResponse(id))
    }

    useEffect(() => {
        dispatch(getAllResponses());
    }, [responseList])

    return (
        <>
            <Dashboard />
            <div>
                {
                    loading ? <Load /> :
                        response.length > 0 ?
                            <>

                                <ListGroup>
                                    {
                                        response.map(res => (
                                            <ListGroupItem className="border-0" key={res._id}>
                                                <Response response={res} deleteResponse={deleteItem} />
                                            </ListGroupItem>
                                        ))
                                    }
                                </ListGroup>
                            </> :
                            <p className="text-center">No Responses</p>
                }
            </div >
        </>
    )
}

export default ResponseList
