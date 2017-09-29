import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
    constructor() {
        super();

        this.state = {
        facebook: '',
        }
    }

    responseFacebook = (response) => {
        console.log('Everything coming back from FB:\n',response)
        // return fetch('/auth', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({response})
        //     // .then(message => console.log(message))
        //     // .then(meal => console.log(meal))
        //     // .catch(err => console.log("error of ", err))
        // })
    }
        

    render() {
        return (
            <div className="Login">        
                <FacebookLogin
                appId='502844323394833'
                size='small'
                redirectUri='http://localhost:3001/auth/facebook/callback'
                fields="name,email,picture"
                onClick={() => console.log('You clicked the FB Login button!')}
                callback={this.responseFacebook} />               
            </div>
        );
    }
}

export default Login;