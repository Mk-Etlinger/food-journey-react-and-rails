const initialState = {
    symptoms: [],
    recentSymptoms: {},
}

export default (state = initialState, action) => {
    let date, recentSymptomsArray;  
    switch (action.type) {
        case 'GET_SYMPTOMS_SUCCESS':
            return Object.assign({}, state, { symptoms: action.symptoms })
        case 'GET_RECENT_SYMPTOMS_SUCCESS':            
            return Object.assign({}, state, { recentSymptoms: action.recentSymptoms });
        case 'UPDATE_SYMPTOM_SUCCESS':
            date = Object.keys(action.symptom)[0]
            recentSymptomsArray = state.recentSymptoms[date].map(symptom => {
                return symptom.id !== action.symptom[date].id ? symptom : action.symptom[date]
            });

            return Object.assign({}, state, { 
                recentSymptoms: {
                    ...state.recentSymptoms,
                    [date]: recentSymptomsArray 
                }
            })
        case 'CREATE_SYMPTOM_SUCCESS':            
            date = Object.keys(action.symptom)[0]
            recentSymptomsArray = state.recentSymptoms[date] || []
            let updatedRecentSymptoms = recentSymptomsArray.length > 0 ? 
                    {
                        ...state.recentSymptoms,
                        [date]: [...recentSymptomsArray, action.symptom[date]],
                    }
                :
                    {
                        [date]: [...recentSymptomsArray, action.symptom[date]],
                        ...state.recentSymptoms,
                    }
            return Object.assign({}, state, { 
                recentSymptoms: updatedRecentSymptoms
            })
        default:
            return state;
    }
}