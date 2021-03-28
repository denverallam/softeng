import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api/server'

const ResponseForm = ({ contentId, responseId, setResponseId, createResponse, updateResponse}) => {

    const [newResponse, setNewResponse] = useState({
        author: "",
        email: "",
        content: ""
    });

    useEffect(() => {
        const fetchData = async (id) => {
            const { data } = await api.get(`/response/r/${id}`)
            setNewResponse(data)
        }
        fetchData(responseId)
    }, [responseId])


    const clear = () => {
        setNewResponse({
            author: "",
            email: "",
            content: ""
        });
        setResponseId("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (responseId) {
            newResponse.author ? updateResponse(responseId, newResponse) : updateResponse(responseId, { ...newResponse, author: 'Anonymous' })
        }
        else {
            newResponse.author ? createResponse(contentId, newResponse) : createResponse(contentId, { ...newResponse, author: 'Anonymous' })
        }
        clear()
    }

    return (
        <div className="container my-5 mt-10">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="content">Comment</Label>
                    <Input type="textarea" name="content" id="content" placeholder="Comment" value={newResponse.content} onChange={(e) => { setNewResponse({ ...newResponse, content: e.target.value }) }} />
                </FormGroup>
                <FormGroup>
                    <Label for="author">Name</Label>
                    <Input type="text" name="author" id="author" placeholder="Name" value={newResponse.author} onChange={(e) => { setNewResponse({ ...newResponse, author: e.target.value }) }} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" value={newResponse.email} onChange={(e) => { setNewResponse({ ...newResponse, email: e.target.value }) }} />
                </FormGroup>
                <Button>Publish</Button>

            </Form>
            <Button onClick={clear}>Clear</Button>
        </div>
    )
}

export default ResponseForm
