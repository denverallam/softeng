import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Admin } from './UserData'
import { Redirect , useLocation, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { login } from '../../../actions/userActions';
const Login = ({history}) => {

    const dispatch = useDispatch()
    const {state} = useLocation()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    console.log(state);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user.email === Admin.email && user.password === Admin.password){
            alert(`Welcome ${Admin.name}`);
            dispatch(login());
            history.push(`${state?.from.pathname || '/admin'}` )
        }
        else{
            alert('Invalid Credentials!')
            setUser({
                email: '',
                password: ''
            })
        }
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }


    return (
        <div className="container-sm my-5" >
            <p className="text-center">Login</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="text">Email</Label>
                    <Input type="text" name="email" id="email" value={user.email} placeholder="Email" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                </FormGroup>
                <Button >Login</Button>
            </Form>
        </div>

    );
}

export default Login;