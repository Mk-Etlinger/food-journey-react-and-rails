import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import User from '../components/home/User';
import DashboardView from '../components/dashboard/DashboardView';
import ListContainer from '../components/listView/ListContainer';
import DataContainer from '../components/dataView/DataContainer';
import RelationContainer from '../components/relationView/RelationContainer';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { LoggedInLayout } from '../layouts/LoggedInLayout';

export default () => (
    <Router>
        <div>
            <DefaultLayout exact path='/' component={ Home } />
            <DefaultLayout path='/login' component={ User } />
            <Switch>
                <LoggedInLayout exact path='/dashboard' component={ DashboardView } />
                <LoggedInLayout path='/dashboard/entries' component={ ListContainer } />
                <LoggedInLayout path='/dashboard/analytics' component={ DataContainer } />
                <LoggedInLayout path='/dashboard/relations' component={ RelationContainer } />
            </Switch>
        </div>
    </Router>
)
