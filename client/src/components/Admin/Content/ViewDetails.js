
import { useSelector } from 'react-redux'
import Load from '../../Content/Load'
import moment from 'moment';
import Dashboard from '../Dashboard';
import ReactHtmlParser from 'react-html-parser';

const ViewDetails = ({ match }) => {

    const contentId = match.params.id

    const printLine = (text) => (
        text.split('\n').map(value => (
            <div className="mb-4">
                {value}
            </div>
        ))
    )

    // const content = useSelector(state => state.content.content)
    const content = useSelector(state => state.content.contentList.filter(content => content._id === contentId)[0])


    return (
        <>
            <Dashboard />
            <div className="container mb-5 p-4">
                {!content ? <Load /> :
                <>
                    <div>
                        <div className="border-bottom border-dark">
                            <p className="page-title text-center my-0">{content.category}</p>
                            <h4 className="headline ">{content.title}</h4>
                            <p className="byline">By {content.author}. {moment(content.date).toString().substr(4, 11)}</p>
                             <div>
                            <div className="mt-4 body-text">
                                {ReactHtmlParser(content.content)}
                            </div>
                            </div>   

                        </div>
                    </div>
                    </>
                }
                
            </div>
        </>
    )
}

export default ViewDetails
