import React from 'react';
import InputField from '../reusables/InputField';

const Register = ({ email, password, passwordCheck, onChangeCb, onSubmitCb }) => {
    return (
        <div className="Register">
            <InputField name="email" 
                type="text"
                value={ email }
                onChangeCb={ onChangeCb }
                placeholder='Email'/>
            <InputField name="password"
                type="password"
                value={ password }
                onChangeCb={ onChangeCb }
                placeholder='password'/>
            <InputField name="passwordCheck"
                displayName="Verify Password"
                type="password"
                value={ passwordCheck }
                onChangeCb={ onChangeCb }
                placeholder='password'/>
        </div>
    );
}

export default Register;