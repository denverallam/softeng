import { useState } from 'react'
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

    const user = JSON.parse(localStorage.getItem('user'))
    const viewer = useSelector(state => state.viewer)
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
        <div className="border p-2">
            <div className="col-sm-10">
                <p className="response-name">{response.author}<span className="text-muted date ml-sm-2">{moment(response.date).toString().substr(4, 11)}</span></p>
                <p className="text-break">{response.content}</p>
            </div>
            <div className="row ml-auto">
                {user && viewer && response.email === user?.result?.email ?
                    <div className="ml-auto mx-2">
                        <Button onClick={() => setResponseId(response._id)} color="info">Edit</Button>
                        <Button onClick={toggle} color="danger">Delete</Button>
                        {confirm(response._id)}
                    </div>
                    : <> </>
                }
            </div>
        </div>
    )
}

export default Response
