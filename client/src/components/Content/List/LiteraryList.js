import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { getAllContent, deleteContent, getContentByCategory } from '../../../actions/contentActions';
import Load from '../Load';
import NavBar from '../../NavBar';
import { listSorter } from '../../../sort';
import moment from 'moment';
import MostViewed from '../MostViewed';
import LatestNews from '../LatestNews';

const LiteraryList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)
    const [contentList, setContentList] = useState([])

    const [order, setOrder] = useState('')

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);


    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    listSorter(order, content)

    useEffect(() => {
        dispatch(getContentByCategory('literary'));
    }, [])

    useEffect(() => {
        setContentList(content.reverse())
    }, [content])

    const [pageNumber, setPageNumber] = useState(1)
    const contentPerPage = 3;
    const pagesVisited = (pageNumber-1) * contentPerPage
    const pageCount = Math.ceil(contentList.length / contentPerPage)

    const changePage = (event, value) => {
        setPageNumber(value)
    }


    const displayArticles = contentList.slice(pagesVisited, pagesVisited + contentPerPage).map(content => (
        <ListGroupItem className="border-0" key={content._id}>
            {(moment(new Date()).toISOString() >= moment(content.date).toISOString() ?
                <Content content={content} /> : ''
            )}
        </ListGroupItem>
    ))

    return (
        <>
            <NavBar />
            <div className="row">
                <div className="container col-sm-8 px-sm-5">
                    <h1 className="page-title text-center mx-auto ntxt">Literary</h1>
                    {
                        loading ? <Load /> :
                            contentList.length > 0 ?
                                <>
                                    {contentList.length > 1 ?
                                        <div className="container">
                                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                <DropdownToggle caret color="white">
                                                    Sort
                                            </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={() => setOrder('OLDEST')}>By Date (Oldest)</DropdownItem>
                                                    <DropdownItem onClick={() => setOrder('LATEST')}>By Date (Latest)</DropdownItem>
                                                    <DropdownItem onClick={() => setOrder('ALPHABET')}>By Title</DropdownItem>
                                                    <DropdownItem onClick={() => setOrder('VIEWS')}>By Views</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div> :
                                        <></>
                                    }
                                    <ListGroup>
                                        {displayArticles}
                                    </ListGroup>
                                    <div className="container d-flex flex-column align-items-center mb-4">
                                        <p className="text">Page: {pageNumber}</p>
                                        <Pagination count={pageCount} page={pageNumber} onChange={changePage} />
                                    </div>

                                </> :
                                <p className="text-center ah">No articles posted</p>
                    }
                </div >
                <div className="container col-sm-3 my-5">
                    <LatestNews />
                    <MostViewed />
                </div>
            </div>
        </>
    )
}

export default LiteraryList
