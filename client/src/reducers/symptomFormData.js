const initialState = {
    description: '',
    severity: 0,
    stress_level: 0,
    notes: '',
    occurred_at: 0,
    active: false         
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SYMPTOM_DATA':
            return Object.assign({}, state, action.symptomFormData)
        case 'TOGGLE_SYMPTOM_FORM':     
            return Object.assign({}, state, { active: action.active })
        default:
            return state
    }
}