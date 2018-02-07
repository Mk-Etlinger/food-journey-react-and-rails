export const toggleMealModal = isVisible => {
    console.log( 'action payload', isVisible )
    return {
        type: 'TOGGLE_MEAL_MODAL',
        isVisible
    }
}