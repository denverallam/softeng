import { useState } from 'react'
import { organization } from './OfficersData'
import BestOfficerHistory from './BestOfficerHistory';

const BestOfficerHistoryList = () => {

    return (
        <div className="row mx-5 my-5">
            {
                organization.map((org, index) => (
                    <BestOfficerHistory organization={org}  key={index}/>
                ))
            }
        </div>
    )
}

export default BestOfficerHistoryList
