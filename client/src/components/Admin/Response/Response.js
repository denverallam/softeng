import React, { useState, useEffect } from 'react'
import api from '../../../api/server'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImg,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';


const Response = ({ response, deleteResponse }) => {

    const dispatch = useDispatch()

    const useStyles = makeStyles({
        media: {
            height: 360
        },
    });

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const confirm = (id) => (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
                Delete Response?
        </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => {
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

    const cutContent = (content) => {
        if (content.length > 150)
            return content.substr(0, 150) + "..."
        else return content.substr(0, 150)
    }

    return (
        <div className="container">
            <Card>
                <CardBody>
                    <CardTitle className="display-4" tag="h5">{response.author}</CardTitle>
                    <CardText>{cutContent(response.content)}</CardText>
                    <CardText>{moment(response.date).fromNow()}</CardText>
                    <div className="ml-auto mb-2">
                        <DeleteIcon onClick={toggle} />
                        {confirm(response._id)}
                    </div>
                </CardBody>
            </Card>
        </div >
    )
}


export default Response
