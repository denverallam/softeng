import {useEffect} from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Response = ({ response, deleteResponse, setResponseId }) => {


    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className="container">
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{response.author}</CardTitle>
                    <CardSubtitle>{moment(response.date).fromNow()}</CardSubtitle>
                    <CardText>{response.content}</CardText>
                </CardBody>
                {user && response.email === user?.result?.email ?
                    <div className="ml-auto mb-2">
                        <EditIcon onClick={() => setResponseId(response._id)} />
                        <DeleteIcon onClick={() => deleteResponse(response._id)} />
                    </div>
                    : <> </>
                }
            </Card>
        </div>
    )
}

export default Response
