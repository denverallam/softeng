
import { boardOfficers } from './data/BoardOfficerData'
import { Card, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, CardBody } from 'reactstrap';
import { committee } from './data/CommiteeData'
import NavBar from '../NavBar';
import { useState } from 'react'
import BoardOfficer from './BoardOfficer';

const BoardOfficerList = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const comm = (committee) => {
        return (
            <div className="col-sm-2 container">    
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
        <>
            <NavBar />

            <h4 className="officer-header mt-4">BOARD OF OFFICERS</h4>
            <h4 className="officer-header mb-4">2020-2021</h4>
            <div className="container-fluid mx-auto row">
                {
                    boardOfficers.map((officer, index) => (
                        <BoardOfficer officer={officer} key={index} />
                    ))
                }
            </div>
            <div className="row mx-5">
                {
                    committee.map((committee, index) => (
                        comm(committee)
                    ))
                }
            </div>
        </>
    )
}

export default BoardOfficerList
