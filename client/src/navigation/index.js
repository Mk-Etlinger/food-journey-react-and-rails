import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import User from '../components/home/User';
import ListContainer from '../components/listView/ListContainer';
import DataContainer from '../components/dataView/DataContainer';
import RelationContainer from '../components/relationView/RelationContainer';
import { AddItem } from '../components/addItem/AddItem';
import { DefaultLayout } from './DefaultLayout';
import { LoggedInLayout } from './LoggedInLayout';

export default () => (
    <Router>
        <div>
            <DefaultLayout exact path='/' component={ Home } />
            <DefaultLayout path='/login' component={ User } />
            <Switch>
                <LoggedInLayout exact path='/dashboard' component={ AddItem } />
                <LoggedInLayout path='/dashboard/addItem' component={ AddItem } />
                <LoggedInLayout path='/dashboard/entries' component={ ListContainer } />
                <LoggedInLayout path='/dashboard/analytics' component={ DataContainer } />
            </Switch>
        </div>
    </Router>
)
