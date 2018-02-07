const initialState = {
    active: false,
    isVisible: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MEAL_FORM':
            return Object.assign({}, state, { active: action.active })
        case 'TOGGLE_MEAL_MODAL':
            return Object.assign({}, state, { isVisible: action.isVisible })
        default:
            return state
    }
}