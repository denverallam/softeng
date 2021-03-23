import { Card, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {useState} from 'react'

const BestOfficerHistory = ({organization}) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="col-sm-2">
            <Card className="my-2 text-center"  onClick={toggle}>
                <CardTitle >Best Officers</CardTitle>
                <CardSubtitle>{organization.year}</CardSubtitle>
                <Modal isOpen={modal} toggle={toggle} className="modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <ModalHeader toggle={toggle} className=" fs-4">
                        {organization.name} ({organization.year})
                            </ModalHeader>
                    <ModalBody>
                        {
                            organization.officers.map(officer => (
                                <div>
                                    <b className="fw-bold">{officer.position}</b>
                                    : {officer.name}
                                </div>
                            ))
                        }
                    </ModalBody>
                </Modal>
            </Card>
        </div>
    )
}

export default BestOfficerHistory
