import {  useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, Container } from 'reactstrap';
import { listSorter } from '../../sort';
import best from './escolariologo.png'
import moment from 'moment';

const LatestNews = ({count}) => {

    const content = useSelector(state => state.content.contentList.filter(content => (content.category === 'news' &&  moment(new Date()).toISOString() >= moment(content.date).toISOString())))
    const contentList = content.slice(0,count || 3)

    listSorter('LATEST', contentList)

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
