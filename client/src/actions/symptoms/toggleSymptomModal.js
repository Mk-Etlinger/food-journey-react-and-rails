export const toggleSymptomModal = isVisible => {
    return {
        type: 'TOGGLE_SYMPTOM_MODAL',
        isVisible
    }
}

export const toggleUpdateSymptomModal = ( isVisible, symptomObject ) => {
    console.log( 'action payload', isVisible, symptomObject )
    return {
        type: 'TOGGLE_UPDATE_SYMPTOM_MODAL',
        symptomObject,
        isVisible,
    }
}