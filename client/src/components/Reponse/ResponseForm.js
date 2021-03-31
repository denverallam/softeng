import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/server'
import { viewerLogin } from '../../api/index'
import {login as viewLogin, logout} from '../../actions/viewerActions'

const ResponseForm = ({ contentId, responseId, setResponseId, createResponse, updateResponse }) => {

    const dispatch = useDispatch()

    const localViewer  = useSelector(state=> state.viewer.viewer)

    const [newResponse, setNewResponse] = useState({
        author: "",
        email: "",
        content: ""
    });

    const [viewer, setViewer] = useState({
        username: '',
        email: ''
    })

    useEffect(() => {
        const fetchData = async (id) => {
            const { data } = await api.get(`/response/r/${id}`)
            setNewResponse(data)
        }
        fetchData(responseId)
    }, [responseId])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (responseId) {
            updateResponse(responseId, newResponse)
            setNewResponse({...newResponse, content:" "})
            setResponseId("")
        }
        else {
            createResponse(contentId, newResponse)
            setNewResponse({...newResponse, content:" "})
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
            alert('Please fill the gago')
        }
    }

    
    const login = () => {
        return <div className="container my-5 mt-10">
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="username">Name</Label>
                    <Input type="text" name="username" id="username" placeholder="Name" onChange={(e) => { setViewer({ ...viewer, username: e.target.value }) }} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={(e) => { setViewer({ ...viewer, email: e.target.value }) }} />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </div>
    }

    useEffect( () => {
        localStorage.removeItem('user')
    }, [])

    const userLogout = () => {
        dispatch(logout())
        setNewResponse({
            author: "",
            email: "",
            content: ""
        })
    }

    return (
        <div className="container my-5 mt-10">
            { localViewer && localViewer?.result.email && localViewer?.result.username ?
                <>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="content">Comment</Label>
                            <Input type="textarea" name="content" id="content" placeholder="Comment" value={newResponse.content} onChange={(e) => { setNewResponse({ ...newResponse, content: e.target.value }) }} />
                        </FormGroup>
                        <Button>Publish</Button>
                    </Form>
                    <Button onClick={userLogout}>Logout</Button>
                </>
                : login()

            }
        </div>
    )


}

export default ResponseForm