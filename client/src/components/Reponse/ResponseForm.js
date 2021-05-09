import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login as viewLogin, logout } from '../../actions/viewerActions'
import { getResponse } from '../../actions/responseActions';

const ResponseForm = ({ contentId, responseId, setResponseId, createResponse, updateResponse }) => {

    const dispatch = useDispatch()

    const localViewer = useSelector(state => state.viewer.viewer)
    const locViewer = JSON.parse(localStorage.getItem('user'))
    const response = useSelector(state => state.response.responseList.find(res => res._id === responseId))


    const [newResponse, setNewResponse] = useState({
        author: "",
        email: "",
        content: ""
    });



    const [viewer, setViewer] = useState({
        username: '',
        email: '',
    })

    const validateEmail = (email) => {
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
        return re.test(String(email).toLowerCase());
    }

    useEffect(() => {
            setViewer({ ...viewer, email: locViewer?.result.email, username: locViewer?.result.username })
            setNewResponse({ ...newResponse, email: viewer.email, author: viewer.username })
    }, [])


    useEffect(() => {
        if(responseId){
            setNewResponse({ ...newResponse, content: response.content })
        }
    }, [responseId])


    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newResponse.content) {
            if (responseId) {
                updateResponse(responseId, newResponse)
                setNewResponse({ ...newResponse, content: "" })
                alert('Updated')
                setResponseId("")
            }
            else {
                createResponse(contentId, newResponse)
                setNewResponse({ ...newResponse, content: "" })
                alert('Posted')
                setResponseId("")
            }
        }
        else {
            setError('Write something!')
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateEmail(viewer.email) === true){
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
        else{
            setError('Please enter a valid email')
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
        setViewer({
            username: "",
            email: ""
        })
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
                        {
                            error ?
                                <Alert>
                                    {error}
                                </Alert> : <></>
                        }
                        <FormGroup>
                            <Input type="textarea" name="content" id="content" placeholder="Comment" value={newResponse.content} onChange={(e) => { setNewResponse({ ...newResponse, email: viewer.email, author: viewer.username, content: e.target.value }) }} />
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