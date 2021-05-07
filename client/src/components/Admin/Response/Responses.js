import { Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Load from '../../Content/Load';
import Dashboard from '../Dashboard';
import { getAllResponses, deleteResponse } from '../../../actions/responseActions';
import moment from 'moment';
import Pagination from '@material-ui/lab/Pagination';
import { listSorter } from '../../../sort';


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
        setResponseList(response)
    }, [response])

    listSorter('LATEST', responseList)


    const filterSearch = (input) => {
        setResponseList(response.filter(response => {
            return response.content.toLowerCase().includes(input.toLowerCase()) || response.author.toLowerCase().includes(input.toLowerCase())
        }))
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [expand, setExpand] = useState(false)
    const expandToggle = () => setExpand(!expand)

    const cutContent = (content) => {
        if (content.length > 30)
            return content.substr(0, 30) + "... See more"
        else return content.substr(0, 30)

    }



    const confirm = (id) => (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
                Delete Response?
        </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {
                    toggle();
                    deleteItem(id);
                }
                }
                >Yes
                </Button>
                <Button color="secondary" onClick={toggle}>No</Button>
            </ModalFooter>
        </Modal>

    )


    const [pageNumber, setPageNumber] = useState(1)
    const contentPerPage = 5;
    const pagesVisited = (pageNumber - 1) * contentPerPage
    const pageCount = Math.ceil(responseList.length / contentPerPage)

    const changePage = (event, value) => {
        setPageNumber(value)
    }

    const displayResponses = responseList.slice(pagesVisited, pagesVisited + contentPerPage).map(res => (
        <tr>
            <td>{res.author}</td>
            <td onClick={expandToggle}>
                {
                    !expand ? cutContent(res.content) : res.content
                }
            </td>
            <td>{moment(res.date).toString().substr(4, 11)}</td>
            <td>
                <Button onClick={toggle} color="danger" outline>Delete</Button>
                {confirm(res._id)}
            </td>
        </tr>
    ))

    return (
        <Fragment>
            <Dashboard />
            <div className="container my-2">
                <Input type="text" name="title" id="title" placeholder='Search Author or Content' onChange={(e) => filterSearch(e.target.value)} />
            </div>
            {
                loading ? <Load /> :
                    responseList.length > 0 ?
                        <div className="my-2 container">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Author</th>
                                        <th>Response</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // responseList.map(res => (
                                        //     <tr>
                                        //         <td>{res.author}</td>
                                        //         <td onClick={expandToggle}>
                                        //             {
                                        //                 !expand ? cutContent(res.content) : res.content
                                        //             }
                                        //         </td>
                                        //         <td>{moment(res.date).toString().substr(4, 11)}</td>
                                        //         <td>
                                        //             <Button onClick={toggle} color="danger" outline>Delete</Button>
                                        //             {confirm(res._id)}
                                        //         </td>
                                        //     </tr>
                                        // ))
                                        displayResponses
                                    }
                                </tbody>
                            </Table>
                            <div className="container d-flex flex-column align-items-center mb-4">
                                <p className="text">Page: {pageNumber}</p>
                                <Pagination count={pageCount} page={pageNumber} onChange={changePage} />
                            </div>
                        </div>
                        : <p className="text-center">No Responses</p>
            }
        </Fragment>
    )
}

export default ResponseList
