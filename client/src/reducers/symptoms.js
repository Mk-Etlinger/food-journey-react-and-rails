const initialState = {
    symptoms: [],
    recentSymptoms: [],
    showSymptomSuccessMessage: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SYMPTOMS_SUCCESS':
            return Object.assign({}, state, { symptoms: action.symptoms })
        case 'GET_RECENT_SYMPTOMS_SUCCESS':
            return Object.assign({}, state, { recentSymptoms: action.recentSymptoms });
        case 'UPDATE_SYMPTOM_SUCCESS':
            let updatedSymptomsArray = state.recentSymptoms.map(symptom => {
                return symptom.id !== action.symptom.id ? symptom : action.symptom
            });

            return Object.assign({}, state, { recentSymptoms: updatedSymptomsArray })
        case 'CREATE_SYMPTOM_SUCCESS':
            return Object.assign({}, state, { 
                recentSymptoms: [action.symptom, ...state.recentSymptoms],
                showSymptomSuccessMessage: true
            })
        case 'SHOW_SYMPTOM_SUCCESS_MESSAGE':
            return Object.assign({}, state, { 
                showSymptomSuccessMessage: action.isVisible
            })
        default:
            return state;
    }
}