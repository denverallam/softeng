import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import moment from 'moment';


const NewList = ({ response, deleteResponse }) => {

    console.log(response)

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [expand, setExpand] = useState(false)
    const expandToggle = () => setExpand(!expand)

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

    const cutContent = (content) => {
        if (content.length > 30)
            return content.substr(0, 30) + "... See more"
        else return content.substr(0, 30)
    }

    const link = (id) => (
        <Link to={`/admin/post/${id}`}/>
    )

    return (
        <ul className="list-group list-group-horizontal-sm row response text-center mt-2">
            <li className="list-group-item col-sm-3">{response.author}</li>
            <li className="list-group-item col-sm-5" onClick={expandToggle}>{
                !expand ? cutContent(response.content) : response.content
            }</li>
            <li className="list-group-item col-sm-2">{moment(response.date).toString().substr(4, 11)}</li>
            <Button onClick={toggle} color="danger" className="col-sm-2" outline>Delete</Button>
            {confirm(response._id)}
        </ul>
    )
}

export default NewList
