import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Alert, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from "../../../actions/userActions";


const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: ""
  })

  useEffect(() => {
    localUser = ''
  }, [])

  const dispatch = useDispatch()

  let localUser = useSelector(state => state.user)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPassword(user))
  }

  useEffect(() => {
    if (!localUser.success) {
      if (localUser.message) {
        setError(localUser.message)
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
    else {
      setSuccess(localUser.success)
      setTimeout(() => {
        setSuccess(false)
      }, 10000);
    }
  }, [localUser])

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="body container-sm my-5 py-3 form"
      >
        <h5 className="text-center">Forgot Password</h5>
        {
          (success === true) ?
            <Alert color="success">
              {localUser.message}
            </Alert> :
            <Alert color="info">
              The link for your password recovery will be sent to your email.
            </Alert>
        }

        <FormGroup>
          <Input type="email"
            required
            id="email"
            placeholder="Email address"
            value={user.email}
            onChange={(e) => setUser({ email: e.target.value })} />
        </FormGroup>
        {error ?
          <Alert color="danger" className="text-center">
            {error}
          </Alert> : <> </>
        }
        <Button type="submit" className="container text-center my-2" color="primary" outline>
          Send Email
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;