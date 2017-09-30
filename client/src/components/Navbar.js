import React from 'react';
import { NavLink } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL

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
        </li>
    </div>
)

export default Navbar;