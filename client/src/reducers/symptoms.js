export default (state = [], action) => {    
    switch (action.type) {
        case 'GET_SYMPTOMS_SUCCESS':
            return action.symptoms;
        case 'GET_RECENT_SYMPTOMS_SUCCESS':
            return action.recentSymptoms;
        default:
            return state;
    }
}