import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { createContent } from '../../../actions/contentActions'
import FileBase from 'react-file-base64'
import Dashboard from '../Dashboard';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';




const ContentForm = ({ history }) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const addMore =  (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
        Add More?
    </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={() => {toggle(); clear()}}>Yes</Button>
        <Button color="danger" onClick={() => {
          toggle();
          history.push('/admin')
          }}>
            No
          </Button>
      </ModalFooter>
    </Modal>
  )

  const dispatch = useDispatch()

  const [newContent, setNewContent] = useState({
    title: '',
    content: '',
    category: '',
    description: '',
    selectedFile: '',
    author: ''
  });

  const blank = {
    title: '',
    content: '',
    category: '',
    description: '',
    selectedFile: '',
    author: ''
  }

  const clear = () => (
    setNewContent(blank)
  )


  const handleChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newContent.title && newContent.author && newContent.content && newContent.category && newContent.description) {
      dispatch(createContent(newContent));
      clear()
      alert("Added");
      toggle()
    }
    else {
      alert("Invalid Input")
    }

  }


  return (
    <Fragment>
      <Dashboard />
      <div className="container my-5 border p-5 border-info">
        <form onSubmit={handleSubmit}>
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
              data={newContent.content}
              editor={ClassicEditor}
              onChange={(e, editor) => { setNewContent({ ...newContent, content: editor.getData() }) }}
            />
          </div>
          <div>
            <FileBase type="file" value={newContent.selectedFile} onDone={({ base64 }) => setNewContent({ ...newContent, selectedFile: base64 })} />
          </div>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="date" name="date" id="date" value={newContent.date} onChange={handleChange} />
          </FormGroup>
          <Button type="submit" color="primary">Publish</Button>
          {addMore}
        </form>
      </div>
    </Fragment>
  )
}

export default ContentForm
