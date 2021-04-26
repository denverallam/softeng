import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Response from './Response';
import NewList from './NewList';
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
        setResponseList(response)
    }, [responseList])

    return (
        <>
            <Dashboard />
            <div>
                {
                    loading ? <Load /> :
                        response.length > 0 ?

                            <div className="container my-5">
                                {/* {response.length > 1 ?
                                    <div className="container">
                                        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                                            <DropdownToggle caret color="white">
                                                Sort
                                        </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => setOrder('OLDEST')}>By Date (Oldest)</DropdownItem>
                                                <DropdownItem onClick={() => setOrder('LATEST')}>By Date (Latest)</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div> :
                                    <></>
                                } */}
                                <ul className="list-group list-group-horizontal-sm row mb-2 text-center">
                                    <li className="list-group-item col-sm-3">Author</li>
                                    <li className="list-group-item col-sm-5">Response</li>
                                    <li className="list-group-item col-sm-2">Date</li>
                                    <li className="list-group-item col-sm-2">Action</li>
                                </ul>
                                {/* <ListGroup>
                                    {
                                        response.map(res => (
                                            <ListGroupItem className="border-0" key={res._id}>
                                                <Response response={res} deleteResponse={deleteItem} />
                                            </ListGroupItem>
                                        ))
                                    }
                                </ListGroup> */}
                                {
                                    response.map(res => (
                                        <NewList response={res} deleteResponse={deleteItem} />
                                    ))
                                }
                            </div> :
                            <p className="text-center">No Responses</p>
                }
            </div >
        </>
    )
}

export default ResponseList
