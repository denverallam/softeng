import React, { useState, useEffect } from 'react';
import { Button, Alert, Form, FormGroup, Input } from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import api from '../../../api/server'
import { login } from '../../../actions/userActions';
import './styles.css'

const Login = ({ history }) => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        localUser = ''
    }, [])


    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await api.get('/user/')
            setCount(data.length)
        }
        fetchUser()
    }, [])


    let localUser = useSelector(state => state.user)
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
        if(localUser.message){
            setError(localUser.message)
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    }, [localUser.message])

    return (
        <div className="body container-sm my-5 py-3 form">

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
                {/*  kung greater than 1 yung user, wag ipakita to */}
                {
                    count < 1 ?
                                    <Link to='/register' className="text-center">
                                    <div>
                                        Create an account
                                    </div>
                                </Link>
                                :<></>
                }


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