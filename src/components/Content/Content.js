import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import { getContent } from '../../actions/contentActions';

const Content = ({ content, deleteContent}) => {

    const cutContent = (content) => {
        if (content.length > 150)
            return content.substr(0, 150) + "..."
        else return content.substr(0, 150)
    }



    return (
        <div>

            <Card>
                {/* <CardMedia image={content.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}/> */}
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
