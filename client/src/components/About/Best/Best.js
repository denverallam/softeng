import NavBar from "../../NavBar"
import BoardOfficerList from "./BoardOfficerList"
import { Card, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, CardBody } from 'reactstrap';
import { useState, Fragment } from 'react'
import { committee } from '../data/CommiteeData'

const Best = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const comm = (committee) => {
        return (
            <div className="col-sm-3 my-2">
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
            </div>

        )
    }


    return (
        <Fragment>
            <NavBar />
            <div className="row px-sm-5">
                <div className="col-sm-7">
                    <BoardOfficerList />
                </div>
                <div className="container blue-bg col-sm-5 mt-4 p-4 ">
                    <h4 className="content-mission">HISTORY OF THE ORGANIZATION</h4>
                    <p className="text-mission">Becarios de Santo Tomas, the Sole Thomasian Scholars Association, is a university-wide organization composed of over 800 members duly recognized by the university. Established in 1994 under the provisions of the Office for Student Affairs, the organization works to produce competent and well-equipped Thomasian scholars over the years. Tracing back from its origin, the organization was formerly named as Ugnayang Tomasino na may Angking Kakayahan (U.T.A.K.) in 1994. A few years later, in 1997, it was then renamed into UST Scholars Association (UST SA). But by 2000, it had its name changed to Escolares. The final revision only took place by 2002 when Rev. Fr. Pompeyo De Mesa, O.P. suggested to change the organization’s name into Becarios de Santo Tomas.</p>
                    <h4 className="content-mission">MISSION</h4>
                    <p className="text-mission">Becarios de Santo Tomas, the Sole Scholars Association of the University of Santo Tomas, a socio-civic organization, recognizes its role to instill academic competence, to enhance camaraderie, to promote social awareness and to mold Thomasian  scholars to be cognizant of their role in the University, in the country and in the whole world, under the guidance of our Almighty God.</p>
                    <h4 className="content-mission">VISION</h4>
                    <p className="text-mission"> Becarios de Santo Tomas, the Sole Scholars Association of the University of Santo Tomas, envisions itself to be a formative organization that produces scholars who are competitive and equipped with Thomasian virtues.</p>
                </div>
            </div>
            <div className="container row mx-auto">
                {
                    committee.map((committee, index) => (
                        comm(committee)
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Best
