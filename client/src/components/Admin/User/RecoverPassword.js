import React, {useState} from 'react';
import { Button} from 'reactstrap';

const RecoverPassword = () => {
    return (
        <div className="container-sm my-5" >
            <p className="text-center">Recover Password</p>
            <p>
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
            <Button>Send Email</Button>
        </div>
    )
}

export default RecoverPassword
