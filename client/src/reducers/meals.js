const initialState = {
    meals: {},
    recentMeals: {},
}

export default (state = initialState, action) => {
    let date, recentMealsArray;
    switch (action.type) {
        case 'GET_MEALS_SUCCESS':
            return Object.assign({}, state, { meals: action.meals })
        case 'GET_RECENT_MEALS_SUCCESS':
            return Object.assign({}, state, { recentMeals: action.recentMeals })
        case 'UPDATE_MEAL_SUCCESS':
            date = Object.keys(action.meal)[0]
            recentMealsArray = state.recentMeals[date].map(meal => {
                return meal.id !== action.meal[date].id ? meal : action.meal[date]
            });
            
            return Object.assign({}, state, { 
                recentMeals: {
                    ...state.recentMeals,
                    [date]: recentMealsArray 
                }
            })
        case 'CREATE_MEAL_SUCCESS':
            date = Object.keys(action.meal)[0]
            recentMealsArray = state.recentMeals[date] || []
            let updatedRecentMeals = recentMealsArray.length > 0 ? 
                    {
                        ...state.recentMeals,
                        [date]: [...recentMealsArray, action.meal[date]],
                    }
                :
                    {
                        [date]: [...recentMealsArray, action.meal[date]],
                        ...state.recentMeals,
                    }
            return Object.assign({}, state, { 
                recentMeals: updatedRecentMeals
            })
            
        default:
            return state;
    }
}