import { useState } from 'react'
import { organization } from '../data/OfficersData'
import BestOfficerHistory from './BestOfficerHistory';
import NavBar from '../../NavBar';
import { Container } from 'reactstrap';

const BestOfficerHistoryList = () => {

    return (
        <Container>
        <NavBar/>

        <h4 className="officer-header my-4 ntxt">BEST OFFICER HISTORY</h4>
        <div className="row mx-5">
            {
                organization.map((org, index) => (
                    <BestOfficerHistory organization={org}  key={index}/>
                ))
            }
        </div>
        </Container>
    )
}

export default BestOfficerHistoryList
