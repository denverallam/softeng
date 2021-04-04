import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {  deleteContent, getContentByCategory } from '../../../actions/contentActions';
import Load from '../Load';
import NavBar from '../../NavBar';
import { listSorter } from '../../../sort';

const OpinionList = () => {

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

    useEffect(() => {
        dispatch(getContentByCategory('opinion'));
        setContentList(content)
    }, [])

    useEffect(() => {
        setContentList(content)
    }, [content])


    listSorter(order, content)

    return (
        <>
            <NavBar />
            <div>
            <h1 className="page-title text-center mx-auto">Opinion</h1>
                {
                    loading ? <Load /> :
                        contentList.length > 0 ?
                            <>
                                {contentList.length > 1 ?
                                    <div className="container">
                                        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
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
                                                <Content content={content} deleteContent={deleteItem} />
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

export default OpinionList