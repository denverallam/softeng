
import { boardOfficers } from '../data/BoardOfficerData'
import { useState } from 'react'
import BoardOfficer from './BoardOfficer';

const BoardOfficerList = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (
        <div className="container">
            <div className="my-4 container">
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
