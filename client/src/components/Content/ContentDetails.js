

import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ResponseList from '../Reponse/ResponseList'
import Load from './Load'
import { CardImg} from 'reactstrap'
import moment from 'moment';
import { getContent } from '../../actions/contentActions';
import NavBar from '../NavBar';


const ContentDetails = ({ match }) => {

    const dispatch = useDispatch()

    const contentId = match.params.id

    const printLine = (text) => (
        text.split('\n').map(value => (
            <div className="mb-4">
                {value}
            </div>
        ))
    )

    const content = useSelector(state => state.content.content)
    const loading = useSelector(state => state.content.loading)

    useEffect(() => {
        dispatch(getContent(contentId));
        // dispatch(getResponses(contentId))
    }, [])

    return (
        <>
        <NavBar/>
        <div className="container-sm my-5">
            {loading ? <Load /> :
                <div>
                    <div className="border-bottom border-dark">
                    <h4 className="mb-3">{content.title}</h4>
                    <div className="my-3">By {content.author}. {moment(content.date).toString()}</div>
                    <CardImg src={content.selectedFile} />
                    <div className="my-4">
                        {printLine(content.content || "")}
                    </div>
                    </div>
                    <div>
                        <ResponseList contentId={content._id} />
                    </div>
                </div>
            }
        </div>
        </>
    )
}

export default ContentDetails
