const initialState = {
    meals: [],
    symptoms: [],
    recentMeals: [],
    recentSymptoms: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MEALS_SUCCESS':
            return action.meals;
        case 'GET_RECENT_MEALS_SUCCESS':
            return action.recentMeals;
        case 'CREATE_MEAL_SUCCESS':
            debugger;
            return Object.assign({}, state, { recentMeals: state.recentMeals.concat(action.meal)})        
        default:
            return state;
    }
}