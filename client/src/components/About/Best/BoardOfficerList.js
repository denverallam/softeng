
import { boardOfficers } from '../data/BoardOfficerData'
import { useState } from 'react'
import BoardOfficer from './BoardOfficer';

const BoardOfficerList = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (
        <div className="container">
            <div className="my-4 container board-header text-center">
                <h3 className="ntxt">BOARD OF OFFICERS</h3>
                <h3 className="ntxt">2020-2021</h3>
            </div>

            <div className="container row">
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
