import React, {useState, useEffect} from 'react'
import api from '../../api/server'
import { useDispatch } from 'react-redux'
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
        setNewContent({...content, views: content.views += 1})
        dispatch(updateContent(content._id, newContent))
    }
    
    return (
        <div className="container">
                <Card>
                    <CardBody>
                        <Button close onClick={() => deleteContent(content._id)} />
                        <Link to={`post/${content._id}`} onClick={increaseViews}>
                            <CardTitle className="display-4" tag="h5">{content.title}</CardTitle>
                        </Link>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">By {content.author}</CardSubtitle>
                        <CardText>{cutContent(content.content)}</CardText>
                        <CardText>{moment(content.date).fromNow()}</CardText>
                        <CardText>{content.views} views</CardText>
                        <Link to={`edit/${content._id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </CardBody>
                </Card>
        </div >
    )
}


export default Content