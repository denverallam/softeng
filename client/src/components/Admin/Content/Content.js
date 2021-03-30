import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImg
} from 'reactstrap';
import { updateContent } from '../../../actions/contentActions'
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
        <Card className="container border border-info">

            <CardBody>
                <Link to={`post/${content._id}`} >
                    <CardTitle className="display-4" tag="h5">{content.title}</CardTitle>
                </Link>
                <CardSubtitle tag="h6" className="mb-2 text-muted">By {content.author}</CardSubtitle>
                <CardText>{cutContent(content.content)}</CardText>
                <CardText>{moment(content.date).fromNow()}</CardText>
                <CardText>{content.views} views</CardText>

            </CardBody>
            <div className="ml-auto mb-2">
                <Link to={`/edit/${content._id}`} className="text-dark">
                    <EditIcon />
                </Link>
                <DeleteIcon onClick={() => deleteContent(content._id)} />
            </div>
        </Card>
    )
}


export default Content
