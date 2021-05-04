import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { deleteContent, getContentByCategory } from '../../../actions/contentActions';
import Load from '../Load';
import NavBar from '../../NavBar';
import Order from './Dropdown';
import { listSorter } from '../../../sort';
import moment from 'moment';

const BeyondEspanaList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)
    const [contentList, setContentList] = useState(content)
    const [order, setOrder] = useState('')

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);


    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }


    useEffect(() => {
        dispatch(getContentByCategory('beyond-espana'));
        setContentList(content.reverse())
    }, [])

    useEffect(() => {
        setContentList(content.reverse())
    }, [content])

    listSorter(order, content)

    return (
        <>
            <NavBar />
            <div className="container">

                <h1 className="page-title text-center mx-auto ntxt">Beyond Espana</h1>

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
                                                <DropdownItem onClick={() => setOrder('ALPHABET')}>By Title</DropdownItem>
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
                            <p className="text-center ah">No articles posted</p>
                }
            </div >
        </>
    )
}

export default BeyondEspanaList
