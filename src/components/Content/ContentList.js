import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import { ListGroup, ListGroupItem } from 'reactstrap';
// import ContentForm from './ContentForm';
import { getAllContent, deleteContent } from '../../actions/contentActions';

const ContentList = ({ match }) => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const [contentList, setContentList] = useState([])
    const category = match.params.category

    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    useEffect(() => {
        dispatch(getAllContent(category));
        setContentList(content)
    }, [dispatch, category, contentList])

    return (

        <div>
            {content.length > 0 ?

                <ListGroup>
                    {
                        content.map(content => (
                            <ListGroupItem className="border-0" key={content._id}>
                                <Content content={content} deleteContent={deleteItem}/>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup> : <p className="mx-auto">No content posted!</p>
            }

        </div >
    )
}

export default ContentList
