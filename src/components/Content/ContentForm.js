import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getContent } from '../../actions/contentActions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createContent,updateContent } from '../../actions/contentActions'

const ContentForm = ({ match }) => {

  const [contentId,setContentId] = useState("")
  const content = useSelector(state => contentId ? state.content.content : {})
  const [newContent, setNewContent] = useState({});

  const dispatch = useDispatch()


  const clear = () => {
    setNewContent({
      ...newContent,
      title: "",
      author: "",
      content: ""
    });
    setContentId("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(contentId){
      dispatch(updateContent(contentId,newContent))
    }
    else{
      dispatch(createContent(newContent));
    }
    clear();
  }

  const handleChange = (e) => {
    setNewContent({...newContent, [e.target.name]:e.target.value})
    console.log(newContent)
  }

  useEffect(() => {
    if (match.params.id) {  
      setContentId(match.params.id)
      dispatch(getContent(contentId))
      setNewContent(content)
    }

  }, [contentId,newContent])

  return (
    <div className="container">
      {console.log(contentId)}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="Title" value={newContent.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input type="text" name="author" id="author" placeholder="Author" value={newContent.author} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="category">Select</Label>
          <Input type="select" name="category" id="category" value={newContent.category} onChange={handleChange}>
            <option value="" selected>-</option>
            <option value="features">Features</option>
            <option value="literary">Literary</option>
            <option value="opinion">Opinion</option>
            <option value="beyond-espana">Beyond Espana</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="content">Body</Label>
          <Input type="textarea" name="content" id="Body" value={newContent.content} onChange={(e) => setNewContent({ ...newContent, content: e.target.value })} />
        </FormGroup>
        <Button>Publish</Button>
      </Form>
    </div>
  )
}

export default ContentForm
