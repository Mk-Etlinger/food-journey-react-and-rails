import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

class User extends Component {
    constructor() {
        super();

        this.state = {
            activeComp: window.location.pathname,
            email: '',
            password: '',
            passwordCheck: '',
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

    handleClick = (e) => {
        const route = e.target.id
        this.props.history.push(`/${ route }`)
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
        const email = this.state.email,
            password = this.state.password,
            request = JSON.stringify({
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
        .then(json => localStorage.setItem("jwt", json.jwt))
        .catch(err => console.log("error of ", err))
        .then(check => this.checkAuth())
    }    

    render() {

        const { email, 
                password, 
                passwordCheck, 
                activeComp 
        } = this.state

        const loginIsActive = activeComp === '/login'
        
        return (
            <div>
                <h1 id='login' 
                    onClick={(e) => this.handleClick(e)} 
                    style={h1Style}>
                    Login
                </h1>
                <h1 style={{ display: 'inline' }}> | </h1>
                <h1 id='register' 
                    onClick={(e) => this.handleClick(e)} 
                    style={h1Style}>
                    Register
                </h1>
                <Form inline onSubmit={ this.handleOnSubmit }>
                { loginIsActive ?
                    <div className="login">
                        <Login email={ email } 
                            password={ password }
                            onChangeCb={ this.handleInputChange }
                            onSubmitCb={ this.handleOnSubmit }/>
                    </div>
                :
                    <div className="register">
                        <Register email={ email }
                            password={ password }
                            passwordCheck={ passwordCheck }
                            onChangeCb={ this.handleInputChange }
                            onSubmitCb={ this.handleOnSubmit }/>
                    </div>
                }
                    <input type="submit" 
                        value={ loginIsActive ? 'Login' : 'Register' }/>
                </Form>
            </div>
        );
    }
}

const h1Style = { 
    display: 'inline',
    cursor: 'pointer' 
}

export default User;