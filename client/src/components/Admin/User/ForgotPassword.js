import { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { forgotPassword } from "../../../actions/userActions";


const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: ""
  })
  const dispatch = useDispatch()

  const {message, success} = useSelector(state => state.user)


  const handleSubmit = (e) =>{
      e.preventDefault()
      dispatch(forgotPassword(user))
  }


  useEffect(() => {
    if(message){
      alert(message.data)
    }
  }, [message])

  // const forgotPasswordHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const { data } = await axios.post(
  //       "/api/user/forgotPassword",
  //       { email },
  //       config
  //     );

  //     setSuccess(data.data);
  //   } catch (error) {
  //     setError(error.response.data.error);
  //     setEmail("");
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="forgotpassword-screenform"
      >
        <h3 className="forgotpassword-screentitle">Forgot Password</h3>
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <p className="forgotpassword-screen__subtext">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={user.email}
            onChange={(e) => setUser({email:e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;