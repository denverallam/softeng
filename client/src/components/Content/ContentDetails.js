

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ResponseList from '../Reponse/ResponseList'
import Load from './Load'
import { CardImg } from 'reactstrap'
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
            <NavBar />
            <div className="container-sm mb-5">
                {loading ? <Load /> :
                    <div>
                        <div className="border-bottom border-dark">
                            <h1 className="page-title text-center mx-auto my-0">{content.category}</h1>
                            <h4 className="headline ">{content.title}</h4>
                            <p className="byline ">By {content.author}. {moment(content.date).toString().substr(4, 11)}</p>
                            <div className="text mt-4">
                                {printLine(content.description || "")}
                            </div>
                            <CardImg src={content.selectedFile} />
                            <div className="text mt-4">
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
