const API_URL = process.env.REACT_APP_API_URL

let token = "Bearer " + localStorage.getItem("jwt")
const setSymptoms = symptoms => {
    return {
        type: 'GET_SYMPTOMS_SUCCESS',
        symptoms
    }
}

const setRecentSymptoms = recentSymptoms => {
    return {
        type: 'GET_RECENT_SYMPTOMS_SUCCESS',
        recentSymptoms
    }
}

export const getSymptoms = () => {
    return dispatch => {
        return fetch(`${API_URL}/symptoms`, {
			headers: { "Authorization": token} 
		})
			.then(response => response.json())
			.then(symptoms => dispatch(setSymptoms(symptoms)))
			.catch(error => console.log("The error is", error))
    }
}

export const getRecentSymptoms = () => {
    return dispatch => {
        return fetch(`${API_URL}/recent_symptoms`, {
			headers: { "Authorization": token} 
		})
			.then(response => response.json())
			.then(recentSymptoms => dispatch(setRecentSymptoms(recentSymptoms)))
			.catch(error => console.log("The error is", error))
    }
}
