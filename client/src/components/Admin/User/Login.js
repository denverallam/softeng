import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login, getAllUser } from '../../../actions/userActions';

const Login = ({ history }) => {

    const localUser = JSON.parse(localStorage.getItem('admin'))
    const stateUser = useSelector(state => state.user.authdata)

    const dispatch = useDispatch()
    const { state } = useLocation()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        dispatch(login(user, state, history))

    }


    return (
        <div className="container-sm my-5" >
            <p className="text-center">Login</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="text">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
                </FormGroup>
                <Button >Login</Button>
            </Form>
        </div>

    );
}

export default Login;