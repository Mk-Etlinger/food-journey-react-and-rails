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
            let key = Object.keys(state.recentSymptoms)[0]
            let updatedRecentSymptoms = {
                [key]: Object.values(state.recentSymptoms)[0].concat(action.symptom) 
            }
            return Object.assign({}, state, { 
                recentSymptoms: updatedRecentSymptoms
            })
        default:
            return state;
    }
}