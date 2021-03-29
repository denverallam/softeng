import React, { useState, useEffect } from 'react'
import api from '../../../api/server'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImg
} from 'reactstrap';
import { updateContent } from '../../../actions/contentActions'
import moment from 'moment';


const Response = ({ response, deleteResponse }) => {

    const dispatch = useDispatch()

    const useStyles = makeStyles({
        media: {
            height: 360
        },
    });

    const classes = useStyles();

    const cutContent = (content) => {
        if (content.length > 150)
            return content.substr(0, 150) + "..."
        else return content.substr(0, 150)
    }
    
    return (
        <div className="container">
            <Card>
                <CardBody>
                    <Button close onClick={() => deleteResponse(response._id)} />
                    <CardTitle className="display-4" tag="h5">{response.author}</CardTitle>
                    <CardText>{cutContent(response.content)}</CardText>
                    <CardText>{moment(response.date).fromNow()}</CardText>
                </CardBody>
            </Card>
        </div >
    )
}


export default Response
