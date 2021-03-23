import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImg
} from 'reactstrap';
import CardMedia from '@material-ui/core/CardMedia';
import moment from 'moment';


const Content = ({ content, deleteContent }) => {


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

    return (
        <div className="container">
                {/* <CardMedia image={content.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} className={classes.media} /> */}

                <Card>
                    <CardBody>
                        <Button close onClick={() => deleteContent(content._id)} />
                        <Link to={`post/${content._id}`}>
                            <CardTitle className="display-4" tag="h5">{content.title}</CardTitle>
                        </Link>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">By {content.author}</CardSubtitle>
                        <CardText>{cutContent(content.content)}</CardText>
                        <CardText>{moment(content.date).fromNow()}</CardText>
                        <Link to={`edit/${content._id}`}>
                            <Button>Edit</Button>
                        </Link>
                    </CardBody>
                </Card>
        </div >
    )
}


export default Content
