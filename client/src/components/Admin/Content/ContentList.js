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
    const content = useSelector(state => state.content)
    const loading = useSelector(state => state.content.loading)
    const [order, setOrder] = useState('')
    const [contentList, setContentList] = useState([])

    const deleteItem = (id) => {
        setContentList(content.contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    listSorter(order, content)

    useEffect(() => {
        dispatch(getAllContent());
        setContentList(content.contentList)
    }, [])


    useEffect(() => {
        setContentList(content.contentList)
    }, [content])

    return (
        <>
            <Dashboard />
            <div>
                {
                    loading ? <Load /> :
                    contentList.length > 0 ?
                            <>
                                {content.length > 1 ?
                                        <Order setValue={setOrder}/>
                                        :
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

export default ContentList
