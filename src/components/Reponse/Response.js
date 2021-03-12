import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import moment from 'moment';
import { deleteResponse } from '../../actions/responseActions'
import { useDispatch} from 'react-redux'

const Response = ({ response }) => {
    const dispatch = useDispatch()
    return (
        <div className="container">
            <Card>
                <CardBody>
                    <Button close onClick={()=> dispatch(deleteResponse(response._id))}/>
                    <CardTitle tag="h5">{response.author}</CardTitle>
                    <CardSubtitle>{moment(response.date).fromNow()}</CardSubtitle>
                    <CardText>{response.content}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Response
