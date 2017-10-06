export default (state = [], action) => {    
    switch (action.type) {
        case 'GET_RECENT_MEALS_SUCCESS':
            return action.recentMeals;
        default:
            return state;
    }
}