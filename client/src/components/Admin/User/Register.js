import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form,Alert, FormGroup, Input } from 'reactstrap';
import { register, clearErrors } from '../../../actions/userActions';

const Register = ({ history }) => {

    const dispatch = useDispatch()

    const localUser = useSelector(state => state.user)
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    console.log(localUser.message)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser.password.length >= 7) {
            dispatch(register(newUser, history))
        }
        else{
            setError('Password must have at least 7 characters!')
            setTimeout(() => {
                setError("");
                // dispatch(clearErrors())
            }, 5000);
        }
    }

    useEffect(() => {
        setError(localUser.message)
        setTimeout(() => {
            setError("");
            // dispatch(clearErrors())
        }, 5000);
    }, [localUser])


    return (
        <div className="body container-sm my-5 py-3 form" >
            <Form onSubmit={handleSubmit}>
                <h5 className="text-center">Register</h5>
                <FormGroup>
                    <Input type="name" name="name" id="name" placeholder="Name" onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                </FormGroup>
                {error ?
                    <Alert color="danger" className="text-center">
                        {error}
                    </Alert> : <> </>
                }
                <Button className="container text-center my-2" color="success" outline>Register</Button>
            </Form>
        </div>

    );
}

export default Register;