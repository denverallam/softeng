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
                <div className="row">
                    <Link to={`/admin/post/${content._id}`} >
                        <CardTitle className="headline article-link">{content.title}</CardTitle>
                    </Link>
                    <div className="ml-auto mb-2">
                        <Link to={`/edit/${content._id}`} className="text-dark">
                            <EditIcon />
                        </Link>
                        <DeleteIcon onClick={toggle} />
                        {confirm(content._id)}
                    </div>
                </div>
                <p className="byline text-muted">by {content.author}. {moment(content.date).toString().substr(4, 11)}</p>
            </CardBody>

        </Card>
    )
}


export default Content
