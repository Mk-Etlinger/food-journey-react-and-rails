import React, { Component } from 'react';
import InputField from '../reusables/InputField';

const Login = ({ password, email, onChangeCb}) => {    
    
    return (
        <div className="Login">        
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
        </div>
    );
}

export default Login
