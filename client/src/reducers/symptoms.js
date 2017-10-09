const initialState = {
    symptoms: {},
    recentSymptoms: {},
}

export default (state = initialState, action) => {    
    switch (action.type) {
        case 'GET_SYMPTOMS_SUCCESS':
            return Object.assign({}, state, { symptoms: action.symptoms })
        case 'GET_RECENT_SYMPTOMS_SUCCESS':            
            return Object.assign({}, state, { recentSymptoms: action.recentSymptoms });
        case 'CREATE_SYMPTOM_SUCCESS':            
            const key = Object.keys(action.symptom)[0]
            const recentSymptomsArray = state.recentSymptoms[key] || []
            const updatedRecentSymptoms = recentSymptomsArray.length > 0 ? 
                    {
                        ...state.recentSymptoms,
                        [key]: [...recentSymptomsArray, action.symptom[key]],
                    }
                :
                    {
                        [key]: [...recentSymptomsArray, action.symptom[key]],
                        ...state.recentSymptoms,
                    }
            return Object.assign({}, state, { 
                recentSymptoms: updatedRecentSymptoms
            })
        default:
            return state;
    }
}