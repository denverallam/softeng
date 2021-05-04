import {useState} from 'react'
import {editorialBoard, sectionEditors, sectionWriters} from '../data/EscolarioOfficerData'
import EditorialBoard from './EditorialBoard';

const EditorialBoardList = () => {


    return (
        <div className="container">
            <div className="my-4 container">
                <h3 className="board-header text-center ntxt">EDITORIAL BOARD</h3>
            </div>

            <div className="container row">
                {
                    editorialBoard.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>
            <div className="my-4 container">
                <h3 className="board-header text-center ntxt">SECTION EDITORS</h3>
            </div>

            <div className="container-fluid row">
                {
                    sectionEditors.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>
            <div className="my-4 container">
                <h3 className="board-header text-center ntxt">SECTION WRITERS</h3>
            </div>
            <div className="container-fluid row">
                {
                    sectionWriters.map((officer, index) => (
                        <EditorialBoard officer={officer} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default EditorialBoardList
