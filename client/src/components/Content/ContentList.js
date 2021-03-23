import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
// import ContentForm from './ContentForm';
import { getAllContent, deleteContent } from '../../actions/contentActions';

const ContentList = ({ match }) => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const [order, setOrder] = useState(true)
    const [contentList, setContentList] = useState([])
    const category = match.params.category

    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    useEffect(() => {
        dispatch(getAllContent(category));
        setContentList(content)
        contentList.reverse()

    }, [dispatch, category, contentList, order])

    console.log(order)
    return (

        <div>

            {content.length > 0 ?
                <>
                    {content.length > 1 ?
                        <div className="ml-5 my-5">
                            <ButtonGroup>
                                <Button>Oldest</Button>
                                <Button>Newest</Button>
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
                <p className="text-center">""</p>
            }

        </div >
    )
}

export default ContentList
