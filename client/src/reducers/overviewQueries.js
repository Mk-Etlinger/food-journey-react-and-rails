const initialState = {
    mostSymptomaticFoods: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOST_SYMPTOMATIC_SUCCESS':
            return Object.assign({}, state, { mostSymptomaticFoods: action.ingredients })
        default:
            return state;
    }
}