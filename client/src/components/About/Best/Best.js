import NavBar from "../../NavBar"
import BoardOfficerList from "./BoardOfficerList"
import { Card, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, CardBody, Container } from 'reactstrap';
import { useState, Fragment } from 'react'
import { committee } from '../data/CommiteeData'
import CommitteeList from "./CommitteeList";

const Best = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <Container>
            <NavBar />
            <div className="row d-flex flex-row-reverse">
                <div className="container-fluid blue-bg col-sm-5 mx-auto mt-4 row">
                    <div className="mt-2 px-2">
                        <h4 className="content-mission">ABOUT BECARIOS DE SANTO TOMAS</h4>
                        <p className="text-mission">Becarios de Santo Tomas, the Sole Thomasian Scholars Association, is a university-wide organization composed of over 800 members duly recognized by the university. Established in 1994 under the provisions of the Office for Student Affairs, the organization works to produce competent and well-equipped Thomasian scholars over the years. Tracing back from its origin, the organization was formerly named as Ugnayang Tomasino na may Angking Kakayahan (U.T.A.K.) in 1994. A few years later, in 1997, it was then renamed into UST Scholars Association (UST SA). But by 2000, it had its name changed to Escolares. The final revision only took place by 2002 when Rev. Fr. Pompeyo De Mesa, O.P. suggested to change the organization’s name into Becarios de Santo Tomas.</p>
                    </div>
                    <div className="col-sm">
                        <h4 className="content-mission">MISSION</h4>
                        <p className="text-mission">Becarios de Santo Tomas, the Sole Scholars Association of the University of Santo Tomas, a socio-civic organization, recognizes its role to instill academic competence, to enhance camaraderie, to promote social awareness and to mold Thomasian  scholars to be cognizant of their role in the University, in the country and in the whole world, under the guidance of our Almighty God.</p>
                    </div>
                    <div className="col-sm">
                        <h4 className="content-mission">VISION</h4>
                        <p className="text-mission"> Becarios de Santo Tomas, the Sole Scholars Association of the University of Santo Tomas, envisions itself to be a formative organization that produces scholars who are competitive and equipped with Thomasian virtues.</p>
                    </div>
                </div>
                <div className="col-sm-7">
                    <BoardOfficerList />
                </div>
            </div>
            <div>
                <CommitteeList committee={committee} />
            </div>
        </Container>
    )
}

export default Best
