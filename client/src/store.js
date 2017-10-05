import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import meals from './reducers/meals'
import symptoms from './reducers/symptoms'
import recentMeals from './reducers/recentMeals'
import recentSymptoms from './reducers/recentSymptoms'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    meals,
    symptoms,
    recentMeals,
    recentSymptoms,
});

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);