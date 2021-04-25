import {useState} from 'react'
import {editorialBoard, sectionEditors} from '../data/EscolarioOfficerData'
import EditorialBoard from './EditorialBoard';

const EditorialBoardList = () => {

    const [modal, setModal] = useState(false);

    return (
        <div className="container">
            <div className="my-4 container">
                <h3 className="board-header text-center">EDITORIAL BOARD</h3>
            </div>

            <div className="container-fluid row">
                {
                    editorialBoard.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>
            <div className="my-4 container">
                <h3 className="board-header text-center">SECTION EDITORS</h3>
            </div>

            <div className="container-fluid row">
                {
                    sectionEditors.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default EditorialBoardList
