import React, { Component } from 'react';
import Login from './Login';
import Box from 'grommet/components/Box';

class User extends Component {
    constructor() {
        super();

        this.state = {
            activeComp: window.location.pathname,
            email: '',
            password: '',
        }
        
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
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
        const email = this.state.email,
            password = this.state.password,
            register = e.currentTarget.id === 'register',
            request = JSON.stringify({
                auth: { email: email, password: password, register: register }
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

        const {  activeComp } = this.state

        const loginIsActive = activeComp === '/login'
        
        return (
            <Box direction='row' 
                justify='center'>      
                <Login email={ this.state.email }
                    password={ this.state.password }
                    onChangeCB={ this.handleInputChange }
                    onSubmitCB={ this.handleOnSubmit } />
            </Box>
        );
    }
}

export default User;