import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImg,
    Modal, ModalBody, ModalFooter

} from 'reactstrap';
import moment from 'moment';


const Content = ({ content, deleteContent }) => {


    const user = useSelector(state => state.user)


    const cutContent = (content) => {
        if (content.length > 80)
            return content.substr(0, 80) + "..."
        else return content.substr(0, 80)
    }


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const confirm = (id) => (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
                Delete Article?
        </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {
                    toggle();
                    deleteContent(id)
                }
                }
                >Yes
                </Button>
                <Button color="secondary" onClick={toggle}>No</Button>
            </ModalFooter>
        </Modal>
    )


    return (
        <Card className="container border border-info">
            <CardBody>
                <Link to={`/admin/post/${content._id}`} >
                    <h5 className="article-link">{content.title}</h5>
                </Link>
                <p className="text-muted">by {content.author}. {moment(content.date).toString().substr(4, 11)}</p>
            </CardBody>
            <div className="row ml-auto m-2">
                <Link to={`/edit/${content._id}`} className="text-dark">
                    <Button color="info" outline>Edit</Button>
                </Link>
                <Button onClick={toggle} color="danger" outline>Delete</Button>
                {confirm(content._id)}
            </div>
        </Card>
    )
}


export default Content
