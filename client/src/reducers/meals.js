export default (state = [], action) => {
    switch (action.type) {
        case 'GET_MEALS_SUCCESS':
            return action.meals;
        default:
            return state;
    }
}