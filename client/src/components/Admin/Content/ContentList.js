import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { getAllContent, deleteContent } from '../../../actions/contentActions';
import Load from '../../Content/Load';
import Dashboard from '../Dashboard';

const ContentList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)
    const [order, setOrder] = useState('')
    const [contentList, setContentList] = useState([])

    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    const listSorter = (order) => {
        switch(order){
            case 'ALPHABET':
                    content.sort((a,b) => {
                        let title1 = a.title.toLowerCase(),
                        title2 = b.title.toLowerCase()

                        if (title1 < title2){
                            return 1
                        }
                        if (title1 > title2){
                            return -1
                        }
                        return 0
                    }) 
                break
            case 'VIEWS':

                    content.sort((a,b) => {
                        return a.views - b.views
                    })

                break
            case 'LATEST':

                    content.sort((a,b) => {
                        let date1 = a.date.toLowerCase(),
                        date2 = b.date.toLowerCase()

                        if (date1 < date2){
                            return -1
                        }
                        if (date1 > date2){
                            return 1
                        }
                        return 0
                    }) 

                break
            case 'OLDEST':

                    content.sort((a,b) => {
                        let date1 = a.date.toLowerCase(),
                        date2 = b.date.toLowerCase()

                        if (date1 < date2){
                            return 1
                        }
                        if (date1 > date2){
                            return -1
                        }
                        return 0
                    }) 

                break
            default:
                return content
        }
    }


    useEffect(() => {
        dispatch(getAllContent());
        setContentList(content)

    }, [dispatch, contentList])

    useEffect(()=> {
        listSorter(order)
    }, [order])

    return (
        <>
        <Dashboard/>
        <div>
            {
                loading ? <Load /> :
                    content.length > 0 ?
                        <>
                            {content.length > 1 ?
                                <div className="ml-5 my-5">
                                    <ButtonGroup>
                                        <Button onClick={() => setOrder('ALPHABET')}>A-Z</Button>
                                        <Button onClick={() => setOrder('VIEWS')}>Views</Button>
                                        <Button onClick={() => setOrder('LATEST')}>Newest</Button>
                                        <Button onClick={() => setOrder('OLDEST')}>Oldest</Button>
                                    </ButtonGroup>
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
