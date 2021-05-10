import { Card, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useState } from 'react'

const Committee = ({comm}) => {


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const comms = (committee) => {
        return (
                <Card className="text-center blue-bg p-4" onClick={toggle}>
                    <CardTitle className="committee-title pt-3 officer-title"> {committee.position}</CardTitle>
                    <Modal isOpen={modal} toggle={toggle} className="modal-md modal-dialog-centered modal-dialog-scrollable">
                        <ModalHeader toggle={toggle} className="committee-container p-2">
                            {committee.position}
                        </ModalHeader>
                        <ModalBody className="committee-container p-2">
                            {
                                committee.names.map(name => (
                                    <div>
                                        <span className="name">{name} </span>
                                    </div>
                                ))
                            }
                        </ModalBody>
                    </Modal>
                </Card>
        )
    }

    return (
        <div className="col-sm-3 my-2">
            {comms(comm)}
        </div>
    )
}

export default Committee
