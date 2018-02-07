const initialState = {
    active: false,
    isVisible: false   
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SYMPTOM_FORM':     
            return Object.assign({}, state, { active: action.active })
        case 'TOGGLE_SYMPTOM_MODAL':
            return Object.assign({}, state, { isVisible: action.isVisible })
        default:
            return state
    }
}