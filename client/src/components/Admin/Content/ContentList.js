import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';
import { getAllContent, deleteContent } from '../../../actions/contentActions';
import Load from '../../Content/Load';
import Dashboard from '../Dashboard';
import Order from '../../Content/List/Dropdown';
import { listSorter } from '../../../sort';
import Pagination from '@material-ui/lab/Pagination';

const ContentList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content)
    const loading = useSelector(state => state.content.loading)
    const [order, setOrder] = useState('')
    const [contentList, setContentList] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const [countMessage, setCountMessage] = useState("")

    const deleteItem = (id) => {
        setContentList(content.contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    const filterSearch = (input) => {
        setContentList(content.contentList.filter(content => {
            return content.title.toLowerCase().includes(input.toLowerCase()) || content.author.toLowerCase().includes(input.toLowerCase())
        }))

        if (!contentList) {
            setCountMessage("No match found")
        }
        if (input) {
            setIsSearching(true)
        }
        else {
            setIsSearching(false)
        }
    }


    listSorter(order, content.contentList)

    useEffect(() => {
        dispatch(getAllContent());
        setContentList(content.contentList.reverse())
    }, [])


    useEffect(() => {
        setContentList(content.contentList.reverse())
    }, [content])


    useEffect(() => {
        setContentList(content.contentList)
    }, [order])

    const [pageNumber, setPageNumber] = useState(1)
    const contentPerPage = 3;
    const pagesVisited = (pageNumber - 1) * contentPerPage
    const pageCount = Math.ceil(contentList.length / contentPerPage)

    const changePage = (event, value) => {
        setPageNumber(value)
    }

    const displayArticles = contentList.slice(pagesVisited, pagesVisited + contentPerPage).map(content => (

        <ListGroupItem className="border-0" key={content._id}>
            <Content content={content} deleteContent={deleteItem} />
        </ListGroupItem>

    ))


    return (
        <Fragment>
            <Dashboard />
            <div className="container mt-2">
                <Input type="text" name="title" id="title" placeholder='Search Author or Title' onChange={(e) => filterSearch(e.target.value)} />
            </div>
            <div>
                {
                    loading ? <Load /> :
                        contentList.length > 0 ?
                            <>
                                {(contentList.length > 1 && !isSearching) ?
                                    <Order setValue={setOrder} />
                                    :
                                    <></>
                                }
                                <>
                                    <ListGroup>
                                        {
                                            // contentList.map(content => (
                                            //     <ListGroupItem className="border-0" key={content._id}>
                                            //         <Content content={content} deleteContent={deleteItem} />
                                            //     </ListGroupItem>
                                            // ))
                                            displayArticles
                                        }
                                    </ListGroup>

                                </>
                                <div className="container d-flex flex-column align-items-center mb-4">
                                    <p className="text">Page: {pageNumber}</p>
                                    <Pagination count={pageCount} page={pageNumber} onChange={changePage} />
                                </div>
                            </> :
                            <p className="text-center">{isSearching ? "No match found" : "No articles posted"}</p>
                }
            </div >

        </Fragment>
    )
}

export default ContentList
