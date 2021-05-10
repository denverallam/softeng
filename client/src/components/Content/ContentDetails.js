import {  useSelector } from 'react-redux'
import ResponseList from '../Reponse/ResponseList'
import Load from './Load'
import {  Container } from 'reactstrap'
import moment from 'moment';
import NavBar from '../NavBar';
import ReactHtmlParser from 'react-html-parser';
import LatestNews from './LatestNews';
import MostViewed from './MostViewed';

const ContentDetails = ({ match }) => {

    const contentId = match.params.id

    const printLine = (text) => (
        text.split('\n').map(value => (
            <div className="mb-4">
                {value}
            </div>
        ))
    )

    const content = useSelector(state => state.content.contentList.find(content => content._id === contentId))
    const loading = useSelector(state => state.content.loading)

    return (
        <Container>
            <NavBar />
            <div className="container mb-5">
                {!content ? <Load /> :
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="p-sm-4">
                                <div className="border-bottom border-dark">
                                    <p className="page-title text-center my-0">{content.category}</p>
                                    <p className="headline ">{content.title}</p>
                                    <p className="byline">By {content.author}. {moment(content.date).toString().substr(4, 11)}</p>

                                    <div>
                                        <div className="mt-4 body-text">
                                            {ReactHtmlParser(content.content)}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <ResponseList contentId={contentId} />
                        </div>
                        <div className="col-sm-4 my-5 d-none d-sm-block sticky-lg-top">
                            <LatestNews />
                            <MostViewed />
                        </div>
                    </div>
                }
            </div>
        </Container>
    )
}

export default ContentDetails
