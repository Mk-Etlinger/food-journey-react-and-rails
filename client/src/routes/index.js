import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Overview from './Overview';
import Navbar from '../components/Navbar'

export default () => (
    <Router>
        <div>
            <Navbar />

            <hr/>

            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/overview' component={Overview} />
        </div>
    </Router>
)