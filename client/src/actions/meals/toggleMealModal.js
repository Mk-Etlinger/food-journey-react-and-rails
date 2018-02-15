export const toggleMealModal = isVisible => {
    return {
        type: 'TOGGLE_MEAL_MODAL',
        isVisible
    }
}

export const toggleUpdateMealModal = ( isVisible ) => {
    console.log('toggling update meal', isVisible)
    return {
        type: 'TOGGLE_UPDATE_MEAL_MODAL',
        isVisible,
    }
}