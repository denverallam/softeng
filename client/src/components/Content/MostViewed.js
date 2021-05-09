import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, Fragment } from 'react'
import Load from './Load';
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
        setContentList(posted.slice(0, 2))
    }, [content])


    return (
        <div>
            <p className="text-center ntxt mt-2">MOST READ</p>
            <ListGroup>
                {
                    contentList.map(content => (
                        <div>
                            <div className="row my-2" style={{ minHeight: '10vh' }}>
                                {
                                    content.selectedFile ?
                                        <div className="col-md-4 d-none d-md-block" style={{ backgroundImage: `url(${content.selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                                        </div>
                                        :
                                        <div className="col-md-4 d-none d-md-block" style={{ backgroundColor: '#002e5d', backgroundImage: `url(${best})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center center' }}>
                                        </div>
                                }
                                <Link to={`/post/${content._id}`} className="txt li col-md-8">
                                    <p className="txt li text-break">{content.title}</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default MostViewed
