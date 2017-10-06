const API_URL = process.env.REACT_APP_API_URL

let token = "Bearer " + localStorage.getItem("jwt")

const setRecentMeals = recentMeals => {
    return {
        type: 'GET_RECENT_MEALS_SUCCESS',
        recentMeals
    }
}

export const getRecentMeals = () => {
    return dispatch => {
        return fetch(`${API_URL}/recent_meals`, {
			headers: { "Authorization": token} 
		})
			.then(response => response.json())
			.then(recentMeals => dispatch(setRecentMeals(recentMeals)))
			.catch(error => console.log("The error is", error))
    }
}