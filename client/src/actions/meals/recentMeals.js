const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const setRecentMeals = recentMeals => {
    return {
        type: 'GET_RECENT_MEALS_SUCCESS',
        recentMeals
    }
}

export const getRecentMeals = () => {
    return dispatch => {
        dispatch( isFetchingMeals( true ))
        return fetch(`${API_URL}/recent_meals`, {
			headers: { "Authorization": getToken()} 
		})
			.then(response => response.json())
			.then(recentMeals => {
                dispatch( setRecentMeals( recentMeals ))
                dispatch( isFetchingMeals( false ))
            })
			.catch(error => console.log("The error is", error))
    }
}

export const isFetchingMeals = isFetching => {
    return {
        type: 'TOGGLE_FETCH_MEALS',
        isFetching
    }
}