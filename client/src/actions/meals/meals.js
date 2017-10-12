const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const setMeals = meals => {
    return {
        type: 'GET_MEALS_SUCCESS',
        meals
    }
}

export const getMeals = () => {
    return dispatch => {
        return fetch(`${API_URL}/meals`, {
			headers: { "Authorization": getToken() } 
		})
			.then(response => response.json())
			.then(meals => dispatch(setMeals(meals)))
			.catch(error => console.log("The error is", error))
    }
}
