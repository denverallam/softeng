import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/server'
import { viewerLogin } from '../../api/index'
import { login as viewLogin, logout } from '../../actions/viewerActions'

const ResponseForm = ({ contentId, responseId, setResponseId, createResponse, updateResponse }) => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(logout())
    }, [])

    const localViewer = useSelector(state => state.viewer.viewer)
    const locViewer = JSON.parse(localStorage.getItem('user'))

    const [newResponse, setNewResponse] = useState({
        author: "",
        email: "",
        content: ""
    });

    const [viewer, setViewer] = useState({
        username: '',
        email: '',
    })


    useEffect(() => {
        const fetchData = async (id) => {
            const { data } = await api.get(`/response/r/${id}`)
            setNewResponse(data)
        }
        fetchData(responseId)
    }, [responseId])

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (responseId) {
            updateResponse(responseId, newResponse)
            setNewResponse({ ...newResponse, content: " " })
            setResponseId("")
        }
        else {
            createResponse(contentId, newResponse)
            setNewResponse({ ...newResponse, content: " " })
            setResponseId("")
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setNewResponse({ ...newResponse, email: viewer.email, author: viewer.username })
        if (viewer.email && viewer.username) {
            dispatch(viewLogin(viewer))
        }
        else {
            setError('Please enter your name and email')
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }


    const login = () => {
        return (
            <div className="container-fluid my-5" style={{ width: '300px' }}>
                <Form onSubmit={handleLogin}>
                    {!error ?
                        <Alert color="info">
                            Enter your email and name to access the comment section.
            </Alert> :
                        <Alert color="danger">
                            {error}
                        </Alert>
                    }
                    <FormGroup>
                        <Input type="text" name="username" id="username" placeholder="Name" onChange={(e) => { setViewer({ ...viewer, username: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="email" placeholder="Email" onChange={(e) => { setViewer({ ...viewer, email: e.target.value }) }} />
                    </FormGroup>
                    <Button color="info" outline>Submit</Button>
                </Form>
            </div>
        )
    }


    const userLogout = () => {
        dispatch(logout())
        setNewResponse({
            author: "",
            email: "",
            content: ""
        })
    }

    return (
        <div className="container my-5">
            {locViewer && locViewer?.result.email && locViewer?.result.username ?
                <>
                    <Form onSubmit={handleSubmit}>
                        {
                            locViewer.result.username ?
                                <b className="text-capitalize">{locViewer.result.username}</b>
                                : <></>
                        }
                        <p onClick={userLogout}>Not you? <a className="a">Change email</a></p>

                        <FormGroup>
                            <Input type="textarea" name="content" id="content" placeholder="Comment" value={newResponse.content} onChange={(e) => { setNewResponse({ ...newResponse, content: e.target.value }) }} />
                        </FormGroup>
                        <Button color="success" outline>Publish</Button>
                    </Form>

                </>
                : login()
            }
        </div>
    )


}

export default ResponseForm