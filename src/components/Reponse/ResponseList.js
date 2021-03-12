import Response from './Response'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getResponses } from '../../actions/responseActions';

const ResponseList = ({ contentId }) => {

    const dispatch = useDispatch()
    const responseList = useSelector(state => state.response.responseList)

    useEffect(() => {

        let unmounted = false

        if (!unmounted) {
            dispatch(getResponses(contentId));
        }

        return () => {
            unmounted = true
        }

    }, [dispatch, contentId, responseList])

    return (
        <div>
            <ListGroup className="container">
                {
                    responseList.map(response => (
                        <ListGroupItem className="border-0">
                            <Response response={response} />
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div >
    )
}

export default ResponseList
