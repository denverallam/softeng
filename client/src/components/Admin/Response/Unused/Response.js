import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardText, CardBody,
    CardTitle,  Button, 
    Modal, ModalBody, ModalFooter
} from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';


const Response = ({ response, deleteResponse }) => {

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
        if (content.length > 150)
            return content.substr(0, 150) + "..."
        else return content.substr(0, 150)
    }

    return (
        <div className="container">
            <Card>
                <CardBody>
                    <div className="row">
                        <Link to={`/admin/post/${response.content_id}`} >
                            <CardTitle className="display-5 article-link"><span style={{ fontWeight: 'bold' }}>By {response.author}</span></CardTitle>
                        </Link>
                        <DeleteIcon onClick={toggle} className="ml-auto" />
                        {confirm(response._id)}
                    </div>

                    <CardText>{cutContent(response.content)}</CardText>
                </CardBody>
            </Card>
        </div >
    )
}


export default Response
