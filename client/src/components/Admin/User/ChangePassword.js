import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, FormGroup, Alert, Input } from 'reactstrap';
import { changePassword, clearErrors } from '../../../actions/userActions';

const ChangePassword = ({ history }) => {


    const localUser = useSelector(state => state.user)
    const [error, setError] = useState('')
    const localStorageUser = JSON.parse(localStorage.getItem("admin"))
    const dispatch = useDispatch()

    
    const [user, setUser] = useState({
        email: localUser?.authData?.result.email || localStorageUser?.result.email || '',
        password: "",
        newpassword: "",
        confirmpassword: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!user.password || !user.newpassword || !user.confirmpassword){
            setError('Please fill in the form')
            setTimeout(() => {
                setError("");
                // dispatch(clearErrors())
            }, 5000);
        }
        else if (user.newpassword.length >= 7) {
            dispatch(changePassword(user, history))
        }
        else {
            setError('Minimum of 7 characters!')
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
            <h5 className="text-center">Change Password</h5>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Old Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="newpassword" id="newpassword" placeholder="New Password" onChange={(e) => setUser({ ...user, newpassword: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })} />
                </FormGroup>
                {error ?
                    <Alert color="danger" className="text-center">
                        {error}
                    </Alert> : <> </>
                }
                <Button className="container text-center my-2" color="primary" outline>Change Password</Button>
            </Form>
        </div>
    )
}

export default ChangePassword;