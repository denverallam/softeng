import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = () => {

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(newUser.name)

    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
        console.log(newUser)
    }


    return (
        <div className="container-sm my-5" >
            <Form onSubmit={handleSubmit}>
                <p className="text-center">Register</p>
                <FormGroup>
                    <Label for="text">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Name" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>

    );
}

export default Register;