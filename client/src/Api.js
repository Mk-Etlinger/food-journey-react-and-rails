import React, { Component } from 'react';

const API_URL = process.env.REACT_APP_API_URL

export const headers = () => {
    const token = "Bearer " + localStorage.getItem("jwt")

    let headers = { 
        'Content-Type': 'aspplication/json',
        'Authorization': token
    }

    return headers
}

export default {
    
    get(url) {     
        debugger;
        return fetch(`${API_URL}/${url}`, {
            headers: headers()
        })  
            .then(response => response.json())
            .then(json => this.setState({ json }))
            .catch(error => console.log("The error is", error))
    },

    post(model) {

    },
}