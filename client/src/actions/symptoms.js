const API_URL = process.env.REACT_APP_API_URL

let token = "Bearer " + localStorage.getItem("jwt")
const setSymptoms = symptoms => {
    return {
        type: 'GET_SYMPTOMS_SUCCESS',
        symptoms
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
