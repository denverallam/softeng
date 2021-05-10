import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewList from './NewList';
import { Input } from 'reactstrap';
import Load from '../../../Content/Load';
import Dashboard from '../../Dashboard';
import Pagination from '@material-ui/lab/Pagination';
import { getAllResponses, deleteResponse } from '../../../../actions/responseActions';

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
    }, [])

    useEffect(() => {
        setResponseList(response)
    }, [response])

    const filterSearch = (input) => {
        setResponseList(response.filter(response => {
            return response.content.toLowerCase().includes(input.toLowerCase()) || response.author.toLowerCase().includes(input.toLowerCase())
        }))
    }

    const [pageNumber, setPageNumber] = useState(1)
    const contentPerPage = 10;
    const pagesVisited = (pageNumber - 1) * contentPerPage
    const pageCount = Math.ceil(responseList.length / contentPerPage)

    const changePage = (event, value) => {
        setPageNumber(value)
    }

    const displayResponses = responseList.slice(pagesVisited, pagesVisited + contentPerPage).map(res => (

        <NewList response={res} deleteResponse={deleteItem} />

    ))

    return (
        <Fragment>
            <Dashboard />
            <div className="container mt-2">
                <Input type="text" name="title" id="title" placeholder='Search Author or Content' onChange={(e) => filterSearch(e.target.value)} />
            </div>
            <div>
                {
                    loading ? <Load /> :
                        responseList.length > 0 ?

                            <div className="container my-5">

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
                                    // responseList.map(res => (
                                    //     <NewList response={res} deleteResponse={deleteItem} />
                                    // ))
                                    displayResponses
                                }
                                <div className="container d-flex flex-column align-items-center mb-4">
                                    <p className="text">Page: {pageNumber}</p>
                                    <Pagination count={pageCount} page={pageNumber} onChange={changePage} />
                                </div>
                            </div> :
                            <p className="text-center">No Responses</p>
                }
            </div >
        </Fragment>
    )
}

export default ResponseList
