import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import meals from './reducers/meals'
import symptoms from './reducers/symptoms'
import mealFormData from './reducers/mealFormData'
import symptomFormData from './reducers/symptomFormData'
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const reducers = combineReducers({
    meals,
    symptoms,
    mealFormData,
    symptomFormData,
});

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);