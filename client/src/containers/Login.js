import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.checkAuth = this.checkAuth.bind(this)    
    }
        
    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })                
    }

    checkAuth()  {
        // when added to redux store
        // if localStorage.jwt === this.props.jwt
        this.props.history.push('/dashboard')
    }

    componentDidMount() {
        
        if (localStorage.jwt) this.checkAuth()
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const email = this.state.email
        const password = this.state.password
        const request = JSON.stringify({
            auth: { email: email, password: password }
        })
        const API_URL = process.env.REACT_APP_API_URL
        this.setState({ email: '', password: ''})
        return fetch(`${API_URL}/user_token`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: request,
        })
        .then(response => response.json())
        .then(json => {
            localStorage.setItem("jwt", json.jwt);          
        })
        .catch(err => console.log("error of ", err))
        .then(test => this.checkAuth())
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
                    value={this.state.email}/>
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

export default withRouter(Login);