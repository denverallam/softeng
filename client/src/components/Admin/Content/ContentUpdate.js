import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { updateContent } from '../../../actions/contentActions'
import Dashboard from '../Dashboard';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const ContentUpdate = ({ match, history }) => {

  const dispatch = useDispatch()

  const content = useSelector(state => state.content.content)
  const contentId = match.params.id
  const cnt =  useSelector(state => state.content.contentList.find(cnt => cnt._id === contentId))
  const [newContent, setNewContent] = useState(cnt);

  const handleChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newContent.title && newContent.author && newContent.content && newContent.category) {
      dispatch(updateContent(contentId, newContent));
      alert("Updated");
      history.push('/admin')
    }
    else {
      alert("Invalid Input")
    }
  }



  return (
    <>
      <Dashboard />
      <div className="container my-5">
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
            <Label for="content">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Title" value={newContent.title} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="content">Author</Label>
            <Input type="text" name="author" id="author" placeholder="Author" value={newContent.author} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Lead</Label>
            <Input type="textarea" name="description" id="description" value={newContent.description} onChange={handleChange} />
          </FormGroup>
          <div className="my-2">
            <Label for="content">Body</Label>
            <CKEditor
              name="content"
              id="content"
              data={content.content}
              editor={ClassicEditor}
              onChange={(e, editor) => { setNewContent({ ...newContent, content: editor.getData() })}}
            />
          </div>
          <div>
            <FileBase type="file" value={newContent.selectedFile} onDone={({ base64 }) => setNewContent({ ...newContent, selectedFile: base64 })} />
          </div>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="date" name="date" id="date" value={newContent.date} onChange={handleChange} />
          </FormGroup>
          <Button type="submit" color="primary" className="my-4">Update</Button>
        </Form>
      </div>
    </>
  )
}

export default ContentUpdate
