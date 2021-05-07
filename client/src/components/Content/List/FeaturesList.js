import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { deleteContent, getContentByCategory } from '../../../actions/contentActions';
import Load from '../Load';
import NavBar from '../../NavBar';
import { listSorter } from '../../../sort';
import moment from 'moment';
import Pagination from '@material-ui/lab/Pagination';
import MostViewed from '../MostViewed';
import LatestNews from '../LatestNews';

const FeaturesList = () => {

    const content = useSelector(state => state.content.contentList)
    const articles = content.filter(content => content.category === 'features')

    const [order, setOrder] = useState('LATEST')
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    listSorter(order, articles)

    const [pageNumber, setPageNumber] = useState(1)
    const contentPerPage = 3;
    const pagesVisited = (pageNumber - 1) * contentPerPage
    const pageCount = Math.ceil(articles.length / contentPerPage)

    const changePage = (event, value) => {
        setPageNumber(value)
    }

    const displayArticles = articles.slice(pagesVisited, pagesVisited + contentPerPage).map(content => (
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
                    <h1 className="page-title text-center mx-auto ntxt">Feature Articles</h1>
                    {
                       (articles.length  < 1) ? <Load /> :
                                <>
                                    {articles.length > 1 ?
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

                                </>
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

export default FeaturesList
