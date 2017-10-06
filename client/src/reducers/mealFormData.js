export default (state = {
    showForm: false,
    meal_type: '',
    ingredients: '',
    description: '',
}, action) => {

    switch (action.type) {
        case 'UPDATE_MEAL_DATA':
            return action.mealFormData
        default:
            return state
    }
}