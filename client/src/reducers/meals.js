const initialState = {
    meals: [],
    recentMeals: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MEALS_SUCCESS':
            return Object.assign({}, state, { meals: action.meals })
        case 'GET_RECENT_MEALS_SUCCESS':
            return Object.assign({}, state, { recentMeals: action.recentMeals })
        case 'UPDATE_MEAL_SUCCESS':
            let recentMealsArray = state.recentMeals.map(meal => {
                return meal.id !== action.meal.id ? meal : action.meal
            });
            
            return Object.assign({}, state, { recentMeals: recentMealsArray })
        case 'CREATE_MEAL_SUCCESS':
          return Object.assign({}, state, {
                recentMeals: [action.meal, ...state.recentMeals]
            })
        default:
            return state;
    }
}