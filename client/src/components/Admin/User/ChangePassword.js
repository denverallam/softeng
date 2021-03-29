import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { changePassword } from '../../../actions/userActions';

const ChangePassword = () => {

    const localUser = JSON.parse(localStorage.getItem("admin"))
    const dispatch = useDispatch()

    const [password, setPassword] = useState({
        newPassword: "",
        oldPassword: "",
        confirmPassword: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(localUser.password === password.oldPassword && password.newPassword === password.confirmPassword){
            // dispatch(changePassword(password.newPassword))
            alert("Password changed!")
        }
        else{
            alert("Wrong password")
        }
    }

    const handleChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value })
    }


    return (
        <div className="container-sm my-5" >
            <p className="text-center">Change Password</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="password">Old Password</Label>
                    <Input type="password" name="oldPassword" id="oldpassword" value={password.oldPassword} placeholder="Old Password" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">New Password</Label>
                    <Input type="password" name="newPassword" id="newpassword" value={password.newPassword} placeholder="New Password" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="repassword" value={password.confirmPassword} placeholder="Confirm Password" onChange={handleChange} />
                </FormGroup>
                <Button>Change Password</Button>
            </Form>
        </div>
    );
}

export default ChangePassword;