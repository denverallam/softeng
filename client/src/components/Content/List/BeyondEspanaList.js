import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {deleteContent, getContentByCategory } from '../../../actions/contentActions';
import Load from '../Load';
import NavBar from '../../NavBar';
import Order from './Dropdown';

const BeyondEspanaList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)
    const [contentList, setContentList] = useState(content)
    const [order, setOrder] = useState('')

    const handleChange = (order) => {
        setOrder(order)
    }

    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    useEffect(() => {
        dispatch(getContentByCategory('beyond-espana'));
        setContentList(content)
    }, [])

    const listSorter = (order) => {
        switch (order) {
            case 'ALPHABET':
                return content.sort((a, b) => {
                    let title1 = a.title.toLowerCase(),
                        title2 = b.title.toLowerCase()
                    if (title1 < title2) {
                        return -1
                    }
                    if (title1 > title2) {
                        return 1
                    }
                    return 0
                })
            case 'VIEWS':
                return content.sort((a, b) => {
                    return b.views - a.views
                })
            case 'OLDEST':
                return content.sort((a, b) => {
                    let date1 = a.date.toLowerCase(),
                        date2 = b.date.toLowerCase()
                    if (date1 < date2) {
                        return -1
                    }
                    if (date1 > date2) {
                        return 1
                    }
                    return 0
                })
        }
    }

    // listSorter(order)

    return (
        <>
        <NavBar/>
        <div>
            <p className="text-center my-2 page-title">Beyond Espana</p>

            {
                    loading ? <Load /> :
                    content.length > 0 ?
                        <>
                            {content.length > 1 ?
                                <div className="container">
                                    <Order setValue={handleChange()}/>
                                </div> :
                                <></>
                            }
                            <ListGroup>
                                {
                                    content.map(content => (
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

export default BeyondEspanaList
