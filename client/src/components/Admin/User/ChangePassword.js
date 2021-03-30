import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { changePassword } from '../../../actions/userActions';

const ChangePassword = ({ history }) => {

    const localUser = JSON.parse(localStorage.getItem("admin"))
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: localUser.result.email,
        password: "",
        newpassword: "",
        confirmpassword: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.newpassword === user.confirmpassword) { 
            if(user.newpassword.length >= 7){
                dispatch(changePassword(user, history)) 
            }
            else{
                alert('Minimum of 7 characters!')
            }
        }
        else alert('Passwords do not much!')
    }




    return (
        <div className="container-sm my-5" >
            <p className="text-center">Change Password</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="password">Old Password</Label>

                    <Input type="password" name="password" id="password" placeholder="Old Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">New Password</Label>
                    <Input type="password" name="newpassword" id="newpassword" placeholder="New Password" onChange={(e) => setUser({ ...user, newpassword: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Confirm Password</Label>
                    <Input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })} />
                </FormGroup>
                <Button>Change Password</Button>
            </Form>
        </div>
    )
}

export default ChangePassword;