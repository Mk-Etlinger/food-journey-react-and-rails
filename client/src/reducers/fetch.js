const initialState = {
    isFetchingMeals: false,
    isFetchingSymptoms: false,
}

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'TOGGLE_FETCH_MEALS':
            return Object.assign({}, state, { isFetchingMeals: action.isFetching })
        case 'TOGGLE_FETCH_SYMPTOMS':
            return Object.assign({}, state, { isFetchingSymptoms: action.isFetching })
        default:
            return state;
    }
}