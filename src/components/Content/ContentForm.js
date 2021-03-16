import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createContent } from '../../actions/contentActions'
import FileBase from 'react-file-base64'
const ContentForm = () => {

  const dispatch = useDispatch()
  const [newContent, setNewContent] = useState({
    title: '',
    content: '',
    selectedFile: '',
    author: ''
  });

  const clear = () => {
    setNewContent({
      ...newContent,
      title: "",
      author: "",
      content: ""
    });
  }


  const handleChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContent(newContent));
    alert("Added")
    console.log(newContent)
    clear()
  }



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="content">Title</Label>
          <Input  type="text" name="title" id="title" placeholder="Title" value={newContent.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="content">Author</Label>
          <Input type="text" name="author" id="author" placeholder="Author" value={newContent.author} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="category">Select</Label>
          <Input type="select" name="category" id="category" value={newContent.category} onChange={handleChange}>
            <option value="">-</option>
            <option value="features">Features</option>
            <option value="literary">Literary</option>
            <option value="opinion">Opinion</option>
            <option value="beyond-espana">Beyond Espana</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="content">Body</Label>
          <Input type="textarea" name="content" id="content" value={newContent.content} onChange={handleChange} />
        </FormGroup>
        <div>
          <FileBase type="file" value={newContent.selectedFile} onDone={({ base64 }) => setNewContent({ ...newContent, selectedFile: base64 })} />
        </div>
        <Button type="submit">Publish</Button>
      </form>
    </div>
  )
}

export default ContentForm
