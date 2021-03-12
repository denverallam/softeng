

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ResponseForm from '../Reponse/ResponseForm'
import ResponseList from '../Reponse/ResponseList'
import moment from 'moment';
import { getContent } from '../../actions/contentActions';

const ContentDetails = ({match}) => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.content)

    const contentId = match.params.id

    useEffect(() => {
        let unmounted = false
        if (!unmounted) {
            dispatch(getContent(contentId));
        }

        return () => {
            unmounted = true
        }

    }, [dispatch, contentId, content])


    return (

        <div className="container">

            {/* <CardMedia image={content.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={content.title} /> */}
            <h4>{content.title}</h4>
            <i className="mb-2">By {content.author}</i> <br/>
            <i tag="h6" className="mb-2 text-muted">Posted {moment(content.date).fromNow()}</i>
            <p className="my-5">{content.content}</p>
            <p>{moment(content.date).toString()}</p>
            <ResponseForm contentId={contentId}/>
            <ResponseList contentId={contentId}/>
        </div>
    )
}

export default ContentDetails
