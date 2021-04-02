import React, { useState, useEffect } from 'react';
import { Button, Alert, Form, FormGroup, Input } from 'reactstrap';
import {useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../../actions/userActions';
import './styles.css'

const Login = ({ history }) => {

    // const localUser = JSON.parse(localStorage.getItem('admin'))
    const localUser = useSelector(state => state.user)
    const dispatch = useDispatch()
    const { state } = useLocation()

    const [error, setError] = useState('')

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!user.email || !user.password) {
            setError('Please enter email and password.')
            setTimeout(() => {
                setError("");
            }, 5000);
        }
        else {
            dispatch(login(user, state, history))
        }
    }

    useEffect(() => {
        setError(localUser.message)
        setTimeout(() => {
            setError("");
            dispatch(clearErrors())
        }, 5000);
    }, [localUser])

    return (
        <div className="body container-sm my-5 py-3 form" >

            <h5 className="text-center">Login</h5>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
                </FormGroup>           
                {error ?
                    <Alert color="danger" className="text-center">
                        {error}
                    </Alert> : <> </>
                }
                <Button className="container text-center my-2" color="primary" outline> Login</Button>
                <Link to='/forgot-password' className="text-center">
                    <div>
                        Forgot password?
                    </div>
                </Link>
            </Form>
        </div>

    );
}

export default Login;