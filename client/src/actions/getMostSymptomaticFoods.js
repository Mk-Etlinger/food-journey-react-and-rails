const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const setSymptomaticIngredients = ingredients => {
    return {
        type: 'GET_MOST_SYMPTOMATIC_SUCCESS',
        ingredients
    }
}

export const getMostSymptomaticFoods = () => {
    return dispatch => {
        return fetch(`${API_URL}/most_symptomatic_ingredients`, {
			headers: { "Authorization": getToken()} 
		})
			.then(response => response.json())
			.then(ingredients => dispatch(setSymptomaticIngredients(ingredients)))
			.catch(error => console.log("The error is", error))
    }
}