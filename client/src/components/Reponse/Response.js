import {useState} from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter

} from 'reactstrap';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Response = ({ response, deleteResponse, setResponseId }) => {

    const viewer = useSelector(state => state.viewer.viewer)
    const user = JSON.parse(localStorage.getItem('user'))

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const confirm = (id) => (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
                Delete Response?
        </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {
                    toggle();
                    deleteResponse(id);
                }
            }
                >Yes
                </Button>
                <Button color="secondary" onClick={toggle}>No</Button>
            </ModalFooter>
        </Modal>
    )

    return (
        <div className="container">
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{response.author}</CardTitle>
                    <CardSubtitle>{moment(response.date).fromNow()}</CardSubtitle>
                    <CardText>{response.content}</CardText>
                </CardBody>
                {viewer && response.email === viewer?.result?.email ?
                    <div className="ml-auto mb-2">
                        <EditIcon onClick={() => setResponseId(response._id)} />
                        <DeleteIcon onClick={toggle} />
                        {confirm(response._id)}
                    </div>
                    : <> </>
                }
            </Card>
        </div>
    )
}

export default Response
