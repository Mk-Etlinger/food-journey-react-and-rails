const initialState = {
    meals: {},
    recentMeals: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MEALS_SUCCESS':
            return Object.assign({}, state, { meals: action.meals })
        case 'GET_RECENT_MEALS_SUCCESS':
            return Object.assign({}, state, { recentMeals: action.recentMeals })
        case 'CREATE_MEAL_SUCCESS':
            const key = Object.keys(action.meal)[0]
            const recentMealsArray = state.recentMeals[key] || []
            const updatedRecentMeals = recentMealsArray.length > 0 ? 
                    {
                        ...state.recentMeals,
                        [key]: [...recentMealsArray, action.meal[key]],
                    }
                :
                    {
                        [key]: [...recentMealsArray, action.meal[key]],
                        ...state.recentMeals,
                    }
            return Object.assign({}, state, { 
                recentMeals: updatedRecentMeals
            })
            
        default:
            return state;
    }
}