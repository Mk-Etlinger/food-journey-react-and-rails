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
        case 'TOGGLE_MEAL_FORM':
            return Object.assign({}, state, { active: action.active })
        default:
            return state
    }
}