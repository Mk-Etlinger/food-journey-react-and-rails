const initialState = {
    meal_type: '',
    ingredients: '',
    description: '',
    active: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MEAL_DATA':
            return action.mealFormData
        case 'SET_MEAL_FORM_ACTIVE':
            return Object.assign({}, state, action.toggleMealButton)
        default:
            return state
    }
}