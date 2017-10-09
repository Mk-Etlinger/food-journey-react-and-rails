export const hideSymptomButton = () => {
    return {
        type: 'TOGGLE_MEAL_FORM',
        active: true
    }
}

export const showSymptomButton = () => {
    return {
        type: 'TOGGLE_MEAL_FORM',
        active: false
    }
}