import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { register } from '../../../actions/userActions';

const Register = ({ history }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser.password.length >= 7) {
            dispatch(register(newUser, history))
        }
        else{
            alert('Minimum of 7 characters!')
        }
    }

    return (
        <div className="container-sm my-5" >
            <Form onSubmit={handleSubmit}>
                <p className="text-center">Register</p>
                <FormGroup>
                    <Label for="text">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Name" onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>

    );
}

export default Register;