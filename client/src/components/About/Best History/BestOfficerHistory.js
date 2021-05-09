import { Card, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, CardBody, Container } from 'reactstrap';
import { useState } from 'react'

const BestOfficerHistory = ({ organization }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="col-sm-2">                
                <Card className="my-2 text-center officer-container" onClick={toggle}>
                    <CardTitle ><p className="officer-title pt-4">Best Officers <p>{organization.year} </p></p></CardTitle>
                    <Modal isOpen={modal} toggle={toggle} className="modal-lg modal-dialog-centered modal-dialog-scrollable">
                            <ModalHeader toggle={toggle} className="committee-container p-2">
                                <p className="modal-title">
                                    {organization.name} ({organization.year})
                                </p>
                            </ModalHeader>
                            <ModalBody className="card-container">
                                {
                                    organization.officers.map(officer => (
                                        <div>
                                            <span className="position">{officer.position}: </span> 
                                            <span className="name">{officer.name} </span>
                                        </div>
                                    ))
                                }
                            </ModalBody>
                    </Modal>
                </Card>
            </div>
        </>
    )
}

export default BestOfficerHistory
