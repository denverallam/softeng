import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import {  Input, ListGroup, ListGroupItem } from 'reactstrap';
import { getAllContent, deleteContent } from '../../../actions/contentActions';
import Load from '../../Content/Load';
import Dashboard from '../Dashboard';
import Order from '../../Content/List/Dropdown';

const ContentList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)
    const [order, setOrder] = useState('')
    const [contentList, setContentList] = useState(content)

    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

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

    listSorter(order)

    useEffect(() => {
        dispatch(getAllContent());
    }, [contentList])

    return (
        <>
            <Dashboard />
            <div>
                {
                    loading ? <Load /> :
                        content.length > 0 ?
                            <>
                                {content.length > 1 ?
                                    <div className="container">
                                        {/* <Input type="select" name="sort" id="sort" value={order} onChange={handleChange}>
                                            <option value="ALPHABET">A-Z</option>
                                            <option value="VIEWS">VIEWS</option>
                                            <option value="LATEST">LATEST</option>
                                            <option value="OLDEST">OLDEST</option>
                                        </Input> */}
                                        <Order setOrder={setOrder}/>
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

export default ContentList
