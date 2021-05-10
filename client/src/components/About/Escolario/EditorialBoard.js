import { Card, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { useState } from 'react'

const EditorialBoard = ({ officer }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="row col-sm-6 mb-4 mx-auto text-center">
            <div className="col-sm-4 mx-auto" style={{ backgroundColor: '#002e5d', backgroundImage: `url(${officer.image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center center', minHeight: '100px', width: '100px', maxWidth:'100px' }}>
            </div>
            <Card className="my-2 col-sm-8 border-0" onClick={toggle}>
                <CardTitle className="board-name">{officer.name}</CardTitle>
                <CardSubtitle className="board-position">{officer.position}</CardSubtitle>
            </Card>
        </div>
    )
}

export default EditorialBoard
