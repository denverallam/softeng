import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import { createResponse } from '../../actions/responseActions';
import {useDispatch} from 'react-redux';

const ResponseForm = ({contentId}) => {
    
    const [newResponse, setNewResponse] = useState({});
    const dispatch = useDispatch()

    const clear = () => {
        setNewResponse({
          author: "",
          email: "",
          content: ""
        });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newResponse)
        newResponse.author ? dispatch(createResponse(contentId,newResponse)) : dispatch(createResponse(contentId,{...newResponse, author: 'Anonymous'}))
        clear()
      }

    return (
        <div className="container mb-5">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="content">Comment</Label>
                    <Input type="textarea" name="content" id="content" placeholder="Comment" value={newResponse.content} onChange={(e)=>{setNewResponse({...newResponse, content: e.target.value })}} />
                </FormGroup>
                <FormGroup>
                    <Label for="author">Name</Label>
                    <Input type="text" name="author" id="author" placeholder="Name" value={newResponse.author} onChange={(e)=>{setNewResponse({...newResponse, author: e.target.value })}} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" value={newResponse.email} onChange={(e)=>{setNewResponse({...newResponse, email: e.target.value })}}  />
                </FormGroup>
                <Button>Publish</Button>
            </Form>
        </div>
    )
}

export default ResponseForm
