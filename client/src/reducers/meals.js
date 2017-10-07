const initialState = {
    meals: {},
    recentMeals: {},
}

// {"Oct 6th"=>
    // [#<Meal:0x007ffea3a78e20
    // id: 42,
    // meal_type: "breakfast",
    // description: "dsf",
    // user_id: 3,
    // created_at: Fri, 06 Oct 2017 17:35:12 UTC +00:00,
    // updated_at: Fri, 06 Oct 2017 17:35:12 UTC +00:00>,]
// }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MEALS_SUCCESS':
            return Object.assign({}, state, { meals: action.meals })
        case 'GET_RECENT_MEALS_SUCCESS':
            return Object.assign({}, state, { recentMeals: action.recentMeals })
        case 'CREATE_MEAL_SUCCESS':
            // need to handle first meal with conditional
            let key = Object.keys(state.recentMeals)[0]
            let updatedRecentMeals = {
                [key]: Object.values(state.recentMeals)[0].concat(action.meal) 
            }
            return Object.assign({}, state, { 
                recentMeals: updatedRecentMeals
            })
        default:
            return state;
    }
}