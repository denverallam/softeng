import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, Fragment } from 'react'
import Load from './Load';
import { getLatestNews } from '../../actions/contentActions';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { listSorter } from '../../sort';
import best from './escolariologo.png'
import moment from 'moment';

const MostViewed = () => {

    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.latestLoading)

    listSorter('VIEWS', content)
    const posted = content.filter(cnt => moment(new Date()).toISOString() >= moment(cnt.date).toISOString())
    const [contentList, setContentList] = useState([])


    useEffect(() => {
        setContentList(posted.slice(0, 3))
    }, [content])


    return (
        <Fragment>
            {!loading ?
                <div className="my-auto">
                    <p className="text-center ntxt mt-2">MOST READ</p>
                    <ListGroup>
                        {
                            contentList.map(content => (
                                <ListGroupItem>
                                    <div className="row" >
                                        <div className="col-sm-4" >
                                            <img src={content.selectedFile || best} className="img-fluid"/>
                                        </div>
                                        <Link to={`/post/${content._id}`} className="txt li col-sm-8">
                                            <p className="txt li text-cente">{content.title}</p>
                                        </Link>
                                    </div>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </div>
                : <Load />
            }

        </Fragment>
    )
}

export default MostViewed
