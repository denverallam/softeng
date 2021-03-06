import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import {  Input, ListGroup, ListGroupItem } from 'reactstrap';
import { getAllContent, deleteContent } from '../../../actions/contentActions';
import Load from '../../Content/Load';
import Dashboard from '../Dashboard';
import Order from '../../Content/List/Dropdown';
import { listSorter } from '../../../sort';


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

    listSorter(order, content)

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
                                        <Order setValue={setOrder}/>
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
