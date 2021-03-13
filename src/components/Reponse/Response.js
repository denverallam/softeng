import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import moment from 'moment';
import { useDispatch} from 'react-redux'

const Response = ({ response, deleteResponse, setResponseId }) => {
    const dispatch = useDispatch()
    return (
        <div className="container">
            <Card>
                <CardBody>
                    <Button close onClick={()=> deleteResponse(response._id)}/>
                    <CardTitle tag="h5">{response.author}</CardTitle>
                    <CardSubtitle>{moment(response.date).fromNow()}</CardSubtitle>
                    <CardText>{response.content}</CardText>
                    <Button onClick={() => setResponseId(response._id)}>Edit</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Response
