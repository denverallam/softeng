
import { boardOfficers } from '../data/BoardOfficerData'
import { useState } from 'react'
import BoardOfficer from './BoardOfficer';

const BoardOfficerList = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (
        <>
            <div className="my-4 board-header text-center">
                <h3 className="ntxt">BOARD OF OFFICERS</h3>
                <h3 className="ntxt">2020-2021</h3>
            </div>

            <div className="row">
                {
                    boardOfficers.map((officer, index) => (
                        <BoardOfficer officer={officer} key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default BoardOfficerList
