import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import ContentForm from './ContentForm';
import { getContentByCategory } from '../../../actions/contentActions';
import Load from '../Load';
import NavBar from '../../NavBar';
import { listSorter } from '../../../sort';
import moment from 'moment';

const NewsList = () => {



    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const cnt = useSelector(state => state.content)
    const loading = useSelector(state => state.content.loading)
    const [contentList, setContentList] = useState([])
    const [order, setOrder] = useState('')

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        dispatch(getContentByCategory('news'));
    }, [])

    useEffect(() => {
        console.log(cnt)
    }, [content])

    useEffect(() => {
        setContentList(content)
    }, [content])

    listSorter(order, contentList)

    const today = Date.now()
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="page-title text-center mx-auto">News</h1>
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
                                                <DropdownItem onClick={() => setOrder('ALPHABET')}>Alphabetically</DropdownItem>
                                                <DropdownItem onClick={() => setOrder('VIEWS')}>By Views</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div> :
                                    <></>
                                }
                                <ListGroup>
                                    {
                                        contentList.map(content => (
                                            <ListGroupItem className="border-0" key={content._id}>
                                                {(moment(new Date()).toISOString() >= moment(content.date).toISOString() ?
                                                    <Content content={content} /> : ''
                                                )}
                                            </ListGroupItem>
                                        ))
                                    }
                                </ListGroup>
                            </> :
                            <p className="text-center">No articles posted</p>
                }
            </div >
        </>
    )
}

export default NewsList
