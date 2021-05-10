import React, { useState, useEffect } from 'react'
import best from './escolariologo.png'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { updateContent } from '../../actions/contentActions'
import moment from 'moment';


const Content = ({ content }) => {

    const dispatch = useDispatch()

    const [newContent, setNewContent] = useState({
        views: 0,
        title: ''
    })


    // const cutContent = (content) => {
    //     if (content.length > 85)
    //         return content.substr(0, 85) + "..."
    //     else return content.substr(0, 85)
    // }

    useEffect(() => {
        setNewContent(content)
    }, [content])


    const increaseViews = () => {
        setNewContent({ ...content, views: content.views += 1 })
        dispatch(updateContent(content._id, newContent))
    }

    return (
        <div className="row mx-auto" style={{ minWidth: '200px' }}>
            {
                content.selectedFile ?
                    <div className="col-md-4 d-none d-md-block" style={{ backgroundImage: `url(${content.selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                    </div>
                    :
                    <div className="col-md-4 d-none d-md-block" style={{ backgroundColor:'#002e5d', backgroundImage: `url(${best})`, backgroundRepeat:'no-repeat', backgroundSize:'100%', backgroundPosition: 'center center' }}>
                    </div>
            }

            <div className="col-md-8 border-0 mt-2">
                <div className="container content-d">
                    <p className="link">{content.title}</p>
                    <div className="container row">
                        <p className="byline">{moment(content.date).toString().substr(4, 11)}</p>
                    </div>
                    {/* <p className="text d-none d-sm-block">{ReactHtmlParser(cutContent(content.description))}</p> */}
                </div>
                <Link to={`/post/${content._id}`} onClick={increaseViews} className="mx-auto">
                    <p className="text-center article-link">READ FULL ARTICLE</p>
                </Link>
            </div>
        </div >
    )
}

export default Content
