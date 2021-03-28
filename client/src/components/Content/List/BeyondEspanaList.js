import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { getAllContent, deleteContent } from '../../../actions/contentActions';
import Load from '../Load';

const BeyondEspanaList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)
    const [contentList, setContentList] = useState(content)

    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    useEffect(() => {
        dispatch(getAllContent('beyond-espana'));
        setContentList(content)
    }, [dispatch, contentList])

    return (

        <div>
            <p className="text-center">Beyond Espana</p>

            {
                loading ? <Load /> :
                    content.length > 0 ?
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
                        <p className="text-center">No articles posted</p>
            }
        </div >
    )
}

export default BeyondEspanaList