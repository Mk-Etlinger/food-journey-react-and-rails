const initialState = {
    active: false,
    isVisible: false,
    updateModalIsVisible: false,
    currentMealObject: {
        id: null,
        ingredients: [], 
        created_at: '', 
        meal_type: '' 
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MEAL_FORM':
            return Object.assign({}, state, { active: action.active })
        case 'TOGGLE_MEAL_MODAL':
            return Object.assign({}, state, { isVisible: action.isVisible })
        case 'TOGGLE_UPDATE_MEAL_MODAL':
            return Object.assign({}, state, { 
                    updateModalIsVisible: action.isVisible,
                })
        default:
            return state
    }
}