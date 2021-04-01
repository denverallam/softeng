import React, { useState, useEffect } from 'react'
import api from '../../api/server'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImg
} from 'reactstrap';
import { updateContent } from '../../actions/contentActions'
import moment from 'moment';


const Content = ({ content, deleteContent }) => {

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
        <div className="container">
            <Card>
                <CardBody>
                    <CardTitle className="headline" tag="h5">{content.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">By {content.author} {moment(content.date).fromNow()}</CardSubtitle>
                    <CardText className="text2">{cutContent(content.content)}</CardText>
                    <Link to={`/post/${content._id}`} onClick={increaseViews}>
                        <p className="text-center article-link">READ FULL ARTICLE</p>
                    </Link>
                </CardBody>
            </Card>
        </div >
    )
}


export default Content
