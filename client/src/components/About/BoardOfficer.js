import { Card, CardTitle, CardSubtitle, CardImg, Modal, ModalHeader, ModalBody, CardBody } from 'reactstrap';
import { useState } from 'react'

const BoardOfficer = ({ officer }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
            <div className=" row col-sm-3 mb-4 mx-auto">
                <div className="col-sm-6">
                    <CardImg src={officer.image} className="img-fluid rounded" />
                </div>
                <Card className="my-2 col-sm-6 border-0" onClick={toggle}>
                    <CardTitle className="board-name">{officer.name}</CardTitle>
                    <CardSubtitle className="board-position">{officer.position}</CardSubtitle>
                </Card>
            </div>
    )
}

export default BoardOfficer
