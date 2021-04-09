
import { boardOfficers } from '../data/BoardOfficerData'
import { Card, CardTitle, Modal, ModalHeader, ModalBody, CardBody } from 'reactstrap';
import { useState } from 'react'
import BoardOfficer from './BoardOfficer';

const BoardOfficerList = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const comm = (committee) => {
        return (
            <div>
                <Card className="my-2 text-center officer-container p-2" onClick={toggle}>
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
            </div>

        )
    }


    return (
        <div className="container">
            <div className="my-4 text-center">
                <h4 className="board-header">BOARD OF OFFICERS</h4>
                <h4 className="board-header">2020-2021</h4>
            </div>

            <div className="container-fluid row">
                {
                    boardOfficers.map((officer, index) => (
                        <BoardOfficer officer={officer} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default BoardOfficerList
