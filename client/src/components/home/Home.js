import React, { Component } from 'react';

export default class Home extends Component {
    handleClick = (e) => {
        const route = e.target.id
        this.props.history.push(`/${ route }`)
    }

    render() {        
        return (
            <div>
                <div className="App-header">        
                <h2>Food Journey</h2>
                <p>A simple food journaling app to get your health on track</p>
                </div>
                <button id='login' onClick={(e) => this.handleClick(e)}>Login</button>
                <button id='register' onClick={(e) => this.handleClick(e)}>Register</button>
            </div>
        )
    }
}


