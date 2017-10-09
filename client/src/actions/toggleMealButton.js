export const hideMealButton = () => {
    return {
        type: 'TOGGLE_SYMPTOM_FORM',
        active: true
    }
}
export const showMealButton = () => {
    return {
        type: 'TOGGLE_SYMPTOM_FORM',
        active: false
    }
}