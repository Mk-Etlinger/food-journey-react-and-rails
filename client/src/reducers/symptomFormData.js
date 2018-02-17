const initialState = {
    active: false,
    isVisible: false,
    updateModalIsVisible: false,
    currentSymptomObject: {
        description: '',
        severity: '',
        stress_level: '',
        notes: '',
        occurred_at: '',
    }
}

export default ( state = initialState, action ) => {
    switch (  action.type) {
        case 'TOGGLE_SYMPTOM_FORM':     
            return Object.assign({}, state, { active: action.active })
        case 'TOGGLE_SYMPTOM_MODAL':
            return Object.assign({}, state, { isVisible: action.isVisible })
        case 'TOGGLE_UPDATE_SYMPTOM_MODAL':
            console.log('action: ', action.symptomObject )
            return Object.assign({}, state, { 
                    updateModalIsVisible: action.isVisible,
                    currentSymptomObject: action.symptomObject,
                })
        default:
            return state
    }
}