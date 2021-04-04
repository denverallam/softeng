

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Load from '../../Content/Load'
import { CardImg } from 'reactstrap'
import moment from 'moment';
import { getContent } from '../../../actions/contentActions';
import Dashboard from '../Dashboard';


const ViewDetails = ({ match }) => {

    const dispatch = useDispatch()

    const contentId = match.params.id

    const printLine = (text) => (
        text.split('\n').map(value => (
            <div className="mb-4">
                {value}
            </div>
        ))
    )

    const content = useSelector(state => state.content.content)
    const loading = useSelector(state => state.content.loading)

    useEffect(() => {
        dispatch(getContent(contentId));
    }, [])

    return (
        <>
            <Dashboard />
            {
                !loading  ?
                    <div className="container-sm my-5">
                        <div>
                            <div className="border-bottom border-dark">
                                <h5 className="mb-3 headline">{content.title}</h5>
                                <p className="mb-2 byline">By {content.author}. {moment(content.date).toString()}</p>
                                <CardImg src={content.selectedFile} />
                                <p className="text">
                                    {printLine(content.content || "")}
                                </p>
                            </div>
                        </div>
                    </div> : <Load />
            }

        </>
    )
}

export default ViewDetails
