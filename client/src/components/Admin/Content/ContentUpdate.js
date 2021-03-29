import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import { Button, Form, FormGroup, Label, Input, Nav } from 'reactstrap';
import { updateContent } from '../../../actions/contentActions'
import api from '../../../api/server'
import NavBar from '../../NavBar';
import Dashboard from '../Dashboard';

const ContentUpdate = ({ match }) => {

  const dispatch = useDispatch()

  const [newContent, setNewContent] = useState({ title: "", author: "", content: "", selectedFile: "" });
  const contentId = match.params.id

  useEffect(() => {
    const fetchData = async (id) => {
      const { data } = await api.get(`/content/post/${id}`)
      setNewContent(data)
    }
    fetchData(contentId)
  }, [contentId])

  const handleChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newContent.title && newContent.author && newContent.content && newContent.category) {
      dispatch(updateContent(contentId, newContent));
      alert("Updated");
    }
    else{
      alert("Invalid Input")
    }
  }

  return (
    <>
    <Dashboard/>
    <div className="container">
      <Form onSubmit={handleSubmit}>
      <FormGroup>
          <Label for="category">Section</Label>
          <Input type="select" name="category" id="category" value={newContent.category} onChange={handleChange}>
            <option value="">-</option>
            <option value="news">News</option>
            <option value="features">Features</option>
            <option value="literary">Literary</option>
            <option value="opinion">Opinion</option>
            <option value="beyond-espana">Beyond Espana</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="Title" value={newContent.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input type="text" name="author" id="author" placeholder="Author" value={newContent.author} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="content">Body</Label>
          <Input type="textarea" name="content" id="content" value={newContent.content} onChange={handleChange} />
        </FormGroup>
        <div>
          <FileBase type="file" value={newContent.selectedFile} onDone={({ base64 }) => setNewContent({ ...newContent, selectedFile: base64 })} />
        </div>
        <Button>Publish</Button>
      </Form>
    </div>
    </>
  )
}

export default ContentUpdate
