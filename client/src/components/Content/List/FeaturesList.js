import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../Content';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { getAllContent, deleteContent, getContentByCategory } from '../../../actions/contentActions';
import Load from '../Load';
import NavBar from '../../NavBar';

const FeaturesList = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)
    const [contentList, setContentList] = useState([])

    const deleteItem = (id) => {
        setContentList(contentList.filter(content => content._id !== id))
        dispatch(deleteContent(id))
    }

    useEffect(() => {
        dispatch(getContentByCategory('features'));
        setContentList(content)
    }, [])

    return (
        <>
            <NavBar />
            <div>
                <p className="text-center my-2 page-title">Features</p>

                {
                    loading ? <Load /> :
                        content.length > 0 ?
                            <>
                                {content.length > 1 ?
                                    <div className="ml-5 my-5">
                                    <div class="btn-group">
                                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Action
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
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

export default FeaturesList
