import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createContent } from '../../actions/contentActions'

const ContentForm = () => {

  const dispatch = useDispatch()
  const [newContent, setNewContent] = useState({});

  const clear = () => {
    setNewContent({...newContent,
      title: "",
      author: "",
      content: ""
    });
  }


  const handleChange = (e) => {
      setNewContent({...newContent, [e.target.name]: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(createContent(newContent));
      alert("Added")
      clear()
    }
  


  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="Title"  value={newContent.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input type="text" name="author" id="author" placeholder="Author" value={newContent.author}  onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="category">Select</Label>
          <Input type="select" name="category" id="category" value={newContent.category}  onChange={handleChange}>
            <option value="">-</option>
            <option value="features">Features</option>
            <option value="literary">Literary</option>
            <option value="opinion">Opinion</option>
            <option value="beyond-espana">Beyond Espana</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="content">Body</Label>
          <Input type="textarea" name="content" id="content" value={newContent.content}  onChange={handleChange} />
        </FormGroup>
        <Button>Publish</Button>
      </Form>
    </div>
  )
}

export default ContentForm
