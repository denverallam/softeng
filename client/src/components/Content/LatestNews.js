import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, Fragment } from 'react'
import { getLatestNews } from '../../actions/contentActions';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { listSorter } from '../../sort';
import best from './escolariologo.png'
import Load from './Load';
import moment from 'moment';

const LatestNews = () => {


    const content = useSelector(state => state.content.contentList.filter(content => content.category === 'news'))
    const loading = useSelector(state => state.content.latestLoading)

    listSorter('LATEST', content)

    const posted = content.filter(cnt => moment(new Date()).toISOString() >= moment(cnt.date).toISOString())

    const [contentList, setContentList] = useState([])

    useEffect(() => {
        setContentList(posted.slice(0, 3))
    }, [])

    useEffect(() => {
        setContentList(posted.slice(0, 3))
    }, [content])



    return (
        <Fragment>
            {!loading ?
                <>
                    <p className="text-center ntxt mt-2">LATEST NEWS</p>
                    <ListGroup>
                        {
                            contentList.map(content => (
                                <ListGroupItem>
                                    <div className="row">
                                        <div className="col-sm-4" >
                                            <img src={content.selectedFile || best} className="img-fluid" />
                                        </div>
                                        <Link to={`/post/${content._id}`} className="txt li col-sm-8">
                                            <p className="txt li">{content.title}</p>
                                        </Link>
                                    </div>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </>
                : <Load />
            }

        </Fragment>
    )
}

export default LatestNews
