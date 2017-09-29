import React from 'react';
import { NavLink } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL

const FbLogin = () => {
    return fetch('/login')
      .then(response => response.json())
      .then(login => console.log(login))
      .catch(error => console.log("The error is", error))
}



const Navbar = () => (
    <div>
        <li>
            <NavLink
                to='/'
                exact            
            >Home </NavLink>
        </li>
        <li>
            <NavLink
                to='/dashboard'
                exact            
            >Dashboard </NavLink>
        </li>
        <li>
            <NavLink
                to='/overview'
                exact            
            >Overview </NavLink>
        </li>
        <li>           
            <a href={`${API_URL}/login`}>Login with FB</a>
            <button onClick={FbLogin}>LoGGGG</button>
        </li>
    </div>
)

export default Navbar;