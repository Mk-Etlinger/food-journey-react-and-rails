import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../component_composition/home/Home';
import { Dashboard } from '../component_composition/dashboard/Dashboard';
import Overview from '../component_composition/overview/Overview';
import Navbar from './Navbar'

export default () => (
    <Router>
        <div>
            <Navbar />

            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/overview' component={Overview} />
        </div>
    </Router>
)