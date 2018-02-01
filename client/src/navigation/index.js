import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/home/Home';
import User from '../components/home/User';
import Dashboard from '../components/dashboard/Dashboard';
import { DefaultLayout } from './DefaultLayout';
import { LoggedInLayout } from './LoggedInLayout';

export default () => (
    <Router>
        <div>
            <DefaultLayout exact path='/' component={ Home } />
            <DefaultLayout path='/login' component={ User } />
            <LoggedInLayout path='/dashboard' component={ Dashboard } />
        </div>
    </Router>
)
