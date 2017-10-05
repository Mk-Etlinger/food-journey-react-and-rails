export default (state = [], action) => {    
    switch (action.type) {
        case 'GET_SYMPTOMS_SUCCESS':
            return action.symptoms;
        default:
            return state;
    }
}