import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import { Button, ButtonGroup, Input, ListGroup, ListGroupItem } from 'reactstrap';
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
            case 'LATEST':
                return content.sort((a, b) => {
                    let date1 = a._id.toLowerCase(),
                        date2 = b._id.toLowerCase()

                    if (date1 < date2) {
                        return 1
                    }
                    if (date1 > date2) {
                        return -1
                    }
                    return 0
                })
            case 'OLDEST':
                return content.sort((a, b) => {
                    let date1 = a._id.toLowerCase(),
                        date2 = b._id.toLowerCase()

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

    const handleChange = (e) => {
        setOrder(e.target.value)
        listSorter(order)
        console.log(order)
    }

    useEffect(() => {
        dispatch(getAllContent());
        setContentList(content)
    }, [dispatch, contentList])

    const [timer, setTimer] = useState(null);



    return (
        <>
            <Dashboard />
            {/* <ResponsiveDrawer/> */}
            <div>
                {
                    loading ? <Load /> :
                        content.length > 0 ?
                            <>
                                {content.length > 1 ?
                                    <div className="container">
                                        {/* <ButtonGroup>
                                        <Button onClick={() => setOrder('ALPHABET')}>A-Z</Button>
                                        <Button onClick={() => setOrder('VIEWS')}>Views</Button>
                                        <Button onClick={() => setOrder('LATEST')}>Newest</Button>
                                        <Button onClick={() => setOrder('OLDEST')}>Oldest</Button>
                                    </ButtonGroup> */}
                                        <Input type="select" name="sort" id="sort" value={order} onChange={handleChange}>
                                            <option value="ALPHABET">A-Z</option>
                                            <option value="VIEWS">VIEWS</option>
                                            <option value="LATEST">LATEST</option>
                                            <option value="OLDEST">OLDEST</option>
                                        </Input>
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
