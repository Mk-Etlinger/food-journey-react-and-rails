const initialState = {
    symptoms: [],
    recentSymptoms: {},
}

export default (state = [], action) => {    
    switch (action.type) {
        case 'GET_SYMPTOMS_SUCCESS':
            return action.symptoms;
        case 'GET_RECENT_SYMPTOMS_SUCCESS':            
            return Object.assign({}, state, { recentSymptoms: action.recentSymptoms });
        case 'CREATE_SYMPTOM_SUCCESS':            
            return Object.assign({}, state, { recentSymptoms: action.recentSymptoms });
        default:
            return state;
    }
}