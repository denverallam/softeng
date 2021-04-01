import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { resetPassword } from "../../../actions/userActions";
import { useDispatch, useSelector } from 'react-redux';

const ResetPassword = ({ match, history }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [user, setUser] = useState({
    password: '',
    confirmPassword: ''
  })

const dispatch = useDispatch()
  const [success, setSuccess] = useState("");

  // const resetPasswordHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   if (user.password !== user.confirmPassword) {
  //     setUser({
  //       password: '',
  //       confirmPassword: ''
  //     });
      
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //     return setError("Passwords do not match");
  //   }

  //   try {
  //     const { data } = await axios.put(
  //       `/api/user/reset-password/${match.params.resetToken}`,
  //       {
  //         password,
  //       },
  //       config
  //     );

  //     setSuccess(data.data);
  //   } catch (error) {
  //     setError(error.response.data.error);
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.confirmPassword) { 
        if(user.password.length >= 7){
            dispatch(resetPassword(user, history, match.params.resetToken))
        }
        else{
            alert('Minimum of 7 characters!')
        }
    }
    else alert('Passwords do not much!')
}

  return (
    <div className="resetpassword-screen">
      <form
        onSubmit={handleSubmit}
        className="resetpassword-screen__form"
      >
        <h3 className="resetpassword-screen__title">Forgot Password</h3>
        {error && <span className="error-message">{error} </span>}
        {success && (
          <span className="success-message">
            {success} <Link to="/login">Login</Link>
          </span>
        )}
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={user.confirmPassword}
            onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;