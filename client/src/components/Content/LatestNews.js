import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, Fragment } from 'react'
import { getLatestNews } from '../../actions/contentActions';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import { listSorter } from '../../sort';
import best from './escolariologo.png'
import Load from './Load';
import moment from 'moment';

const LatestNews = ({count}) => {

    const content = useSelector(state => state.content.contentList.filter(content => content.category === 'news'))
    const loading = useSelector(state => state.content.latestLoading)

    listSorter('LATEST', content)

    const posted = content.filter(cnt => moment(new Date()).toISOString() >= moment(cnt.date).toISOString())

    const [contentList, setContentList] = useState([])

    useEffect(() => {
        setContentList(posted.slice(0, count|| 2))
    }, [])

    useEffect(() => {
        if (posted.slice(0, 2) !== contentList) {
            setContentList(posted.slice(0, count || 2))
        }
    }, [content])



    return (
        <Container>
            <p className="text-center ntxt mt-2">LATEST NEWS</p>
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
        </Container>
    )
}

export default LatestNews
