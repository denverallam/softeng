

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ResponseList from '../Reponse/ResponseList'
import moment from 'moment';
import { getContent } from '../../actions/contentActions';

const ContentDetails = ({match}) => {

    const dispatch = useDispatch()

    const contentId = match.params.id
    

    useEffect(() => {
        dispatch(getContent(contentId));
    }, [contentId])
    
    const content = useSelector(state => state.content.content)
    return (

        <div className="container my-5">

            {/* <CardMedia image={content.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={content.title} /> */}
            <h4 className="mb-3 display-4">{content.title}</h4>
            <i className="mb-2">By {content.author}</i>
            <p>{moment(content.date).toString()}</p>
            <div className="mb-3 lead">{content.content}</div>
            <ResponseList contentId={content._id}/>
        </div>
    )
}

export default ContentDetails
