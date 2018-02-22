const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const setRecentSymptoms = recentSymptoms => {
    return {
        type: 'GET_RECENT_SYMPTOMS_SUCCESS',
        recentSymptoms
    }
}

export const getRecentSymptoms = () => {
    return dispatch => {
        dispatch( isFetchingSymptoms( true ))
        return fetch(`${API_URL}/recent_symptoms`, {
			headers: { "Authorization": getToken()} 
		})
			.then(response => response.json())
			.then(recentSymptoms => {
                dispatch(setRecentSymptoms(recentSymptoms))
                dispatch( isFetchingSymptoms( false ))
            })
			.catch(error => console.log("The error is", error))
    }
}

export const isFetchingSymptoms = isFetching => {
    return {
        type: 'TOGGLE_FETCH_SYMPTOMS',
        isFetching
    }
}
