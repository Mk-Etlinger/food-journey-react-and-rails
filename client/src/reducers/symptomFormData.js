const initialState = {
    description: '',
    severity: '',
    stress_level: '',
    notes: '',
    occurred_at: '',
    active: false         
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SYMPTOM_DATA':
            return Object.assign({}, state, action.symptomFormData)
        case 'SET_SYMPTOM_FORM_ACTIVE':
            return Object.assign({}, state, action.toggleMealButton)
        default:
            return state
    }
}