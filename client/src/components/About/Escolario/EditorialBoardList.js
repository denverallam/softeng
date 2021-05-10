import {editorialBoard, sectionEditors} from '../data/EscolarioOfficerData'
import EditorialBoard from './EditorialBoard';

const EditorialBoardList = () => {


    return (
        <>
            <div className="my-4 board-header text-center">
                <h3 className="ntxt">EDITORIAL BOARD</h3>
            </div>

            <div className="row">
                {
                    editorialBoard.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>
            <div className="my-4 board-header text-center ">
                <h3 className="ntxt">SECTION EDITORS</h3>
            </div>

            <div className="row">
                {
                    sectionEditors.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>

        </>
    )
}

export default EditorialBoardList
