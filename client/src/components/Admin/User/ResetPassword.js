import { useState, useEffect } from "react";
import { resetPassword, clearErrors } from "../../../actions/userActions";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Alert, Input } from 'reactstrap';

const ResetPassword = ({ match, history }) => {
  const [error, setError] = useState('')
  const [user, setUser] = useState({
    password: '',
    confirmPassword: ''
  })

  useEffect(()=>{
    localUser = ''
}, [])
  let localUser = useSelector(state => state.user)

  const [success, setSuccess] = useState("");
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.confirmPassword) {
      if (user.password.length >= 7) {
        dispatch(resetPassword(user, history, match.params.resetToken))
      }
      else {
        setError('Password must contain at least 7 characters')
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
    else {
      setError('Passwords do not match')
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  useEffect(() => {
    if (!localUser.success) {
      setError(localUser.message)
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    else {
      setSuccess(localUser.success)
      setTimeout(() => {
        setSuccess(false)
      }, 10000);
    }
  }, [localUser])


  return (

    <div className="body container-sm my-5 py-3 form" >
      <h5 className="text-center">Change Password</h5>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
        </FormGroup>
        {error ?
          <Alert color="danger" className="text-center">
            {error}
          </Alert> : <> </>
        }
        <Button className="container text-center my-2" color="primary" outline>Change Password</Button>
      </Form>
    </div>
  );
};

export default ResetPassword;