import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
        email: '',
        password: '',
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)        
    }
        
    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })                
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const email = this.state.email
        const password = this.state.password
        const request = JSON.stringify({
            auth: { email: email, password: password }
        })
        console.log(request)
        return fetch("/user_token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: request,
        })
        .then(response => response.json())
        .then(json => localStorage.setItem("jwt", json.jwt))
        .catch(err => console.log("error of ", err))
    }    

    render() {
        return (
            <div className="Login">        
                <h1>Login</h1>
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="email">Email: </label>
                <br />
                <input
                    name="email"                    
                    type="email"
                    onChange={this.handleInputChange}
                    value={this.state.username}/>
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    name="password"                    
                    type="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}/>
                <br/>
                <input type="submit" value="Login"/>
            </form>                            
        </div>
        );
    }
}

export default Login;