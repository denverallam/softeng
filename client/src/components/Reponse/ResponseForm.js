import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/server'
import { viewerLogin } from '../../api/index'

const ResponseForm = ({ contentId, responseId, setResponseId, createResponse, updateResponse }) => {


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


    useEffect(() => {
        localStorage.removeItem('user')
    }, [])

    const clear = () => {
        setNewResponse({
            ...newResponse,
            content: ""
        });
        setResponseId("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (responseId) {
            updateResponse(responseId, newResponse)
        }
        else {
            createResponse(contentId, newResponse)
        }
        clear()
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setNewResponse({ ...newResponse, email: viewer.email, author: viewer.username })
        if (viewer.email && viewer.username) {
            userLogin(viewer)
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

    const userLogin = (username, email) => {
        viewerLogin(username, email)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                return res.data
            })
            .catch(err => {
                console.log(err)
                return err
            })
    }

    const userLogout = () => {
        localStorage.removeItem('user')
        setNewResponse({
            author: "",
            email: "",
            content: ""
        })
    }

    return (
        <div className="container my-5 mt-10">
            {newResponse.email && newResponse.author ?
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
