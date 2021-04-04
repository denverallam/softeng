import React, { useState, useEffect } from 'react'
import best from './escolariologo.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImg
} from 'reactstrap';
import { updateContent } from '../../actions/contentActions'
import moment from 'moment';


const Content = ({ content }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    

    const [newContent, setNewContent] = useState({
        views: 0,
        title: ''
    })

    const useStyles = makeStyles({
        media: {
            height: 360
        },
    });

    const classes = useStyles();

    const cutContent = (content) => {
        if (content.length > 150)
            return content.substr(0, 150) + "..."
        else return content.substr(0, 150)
    }


    useEffect(() => {
        setNewContent(content)
    }, [content])


    const increaseViews = () => {
        setNewContent({ ...content, views: content.views += 1 })
        dispatch(updateContent(content._id, newContent))
    }

    return (
        <div className="container row border border-info mx-auto">
            <div className="col-sm-4">
                <CardImg src={content.selectedFile || best} className="rounded img-fluid img-thumbnail border-0" />
            </div>
            <Card className="col-sm-8 border-0">
                <CardBody>
                    <CardTitle className="headline" tag="h5">{content.title}</CardTitle>
                    <CardSubtitle tag="h6" className="byline">By {content.author}. {moment(content.date).fromNow()}</CardSubtitle>
                    <CardText className="text2">{cutContent(content.content)}</CardText>
                </CardBody>
            </Card>
            <Link to={`/post/${content._id}`} onClick={increaseViews} className="mx-auto">
                <p className="text-center article-link">READ FULL ARTICLE</p>
            </Link>
        </div >
    )
}

export default Content
