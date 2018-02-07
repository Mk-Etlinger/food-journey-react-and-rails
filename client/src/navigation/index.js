import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import User from '../components/home/User';
import DashboardView from '../components/dashboard/DashboardView';
import ListContainer from '../components/listView/ListContainer';
import DataContainer from '../components/dataView/DataContainer';
import RelationContainer from '../components/relationView/RelationContainer';
import MealForm from '../components/addItem/MealForm';
import SymptomForm from '../components/addItem/SymptomForm';
import { DefaultLayout } from './DefaultLayout';
import { LoggedInLayout } from './LoggedInLayout';

export default () => (
    <Router>
        <div>
            <DefaultLayout exact path='/' component={ Home } />
            <DefaultLayout path='/login' component={ User } />
            <Switch>
                <LoggedInLayout exact path='/dashboard' component={ DashboardView } />
                <LoggedInLayout path='/dashboard/addMeal' component={ MealForm } />
                <LoggedInLayout path='/dashboard/addAilment' component={ SymptomForm } />
                <LoggedInLayout path='/dashboard/entries' component={ ListContainer } />
                <LoggedInLayout path='/dashboard/analytics' component={ DataContainer } />
                <LoggedInLayout path='/dashboard/relations' component={ RelationContainer } />
            </Switch>
        </div>
    </Router>
)
