

import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ResponseList from '../Reponse/ResponseList'
import Load from './Load'
import { CardImg } from 'reactstrap'
import moment from 'moment';
import { getContent } from '../../actions/contentActions';
import NavBar from '../NavBar';
import ReactHtmlParser from 'react-html-parser';

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
            <div className="container mb-5 p-4">
                {loading ? <Load /> :
                <>
                    <div>
                        <div className="border-bottom border-dark">
                            <p className="page-title text-center my-0">{content.category}</p>
                            <h4 className="headline ">{content.title}</h4>
                            <p className="byline">By {content.author}. {moment(content.date).toString().substr(4, 11)}</p>
                            <div className="text mt-4">
                                {printLine(content.description || "")}
                            </div>

                             <div>
                            {
                                content.selectedFile ?
                                    <div className="container">
                                        <img src={content.selectedFile} className="rounded"/>
                                    </div>
                                    : <></>
                            }
                            <div className="mt-4 text">
                                {ReactHtmlParser(content.content)}
                            </div>
                            </div>   

                        </div>
                    </div>
                    <ResponseList contentId={contentId}/>
                    </>
                }
                
            </div>
        </>
    )
}

export default ContentDetails
