import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getContent } from '../../actions/contentActions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { updateContent } from '../../actions/contentActions'
import api from '../../api/server'

const ContentUpdate = ({ match }) => {

  const dispatch = useDispatch()

  const [newContent, setNewContent] = useState({ title:"", author: "", content:""});
  const contentId = match.params.id

  useEffect(() => {
      const fetchData = async (id) =>{
        const {data} = await api.get(`/content/post/${id}`)
        setNewContent(data)
      }
      fetchData(contentId)
  }, [contentId])

  
  const handleChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContent(contentId, newContent))
    alert("Updated")
  }


  return (
    <div className="container">
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
        <Button>Publish</Button>
      </Form>
    </div>
  )
}

export default ContentUpdate
