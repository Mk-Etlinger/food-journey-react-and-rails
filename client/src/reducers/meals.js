const initialState = {
    meals: [],
    recentMeals: [],
    showMealSuccessMessage: false,
}

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'GET_MEALS_SUCCESS':
            return Object.assign({}, state, { meals: action.meals })
        case 'GET_RECENT_MEALS_SUCCESS':
            return Object.assign({}, state, { recentMeals: action.recentMeals })
        case 'UPDATE_MEAL_SUCCESS':
            let recentMealsArray = state.recentMeals.map( meal => {
                return meal.id !== action.meal.id ? meal : action.meal
            });
            
            return Object.assign({}, state, 
                { recentMeals: recentMealsArray },
                { meals: [ action.meal, ...state.meals ] })
        case 'CREATE_MEAL_SUCCESS':
            return Object.assign({}, state, {
                meals: [ action.meal, ...state.meals ],
                recentMeals: [ action.meal, ...state.recentMeals ],
                showMealSuccessMessage: true
            })
        case 'SHOW_MEAL_SUCCESS_MESSAGE':
            return Object.assign({}, state, { 
                showMealSuccessMessage: action.isVisible
            })
        default:
            return state;
    }
}