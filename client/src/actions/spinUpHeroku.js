const API_URL = process.env.REACT_APP_API_URL

export const spinUpHeroku = () => {
    return dispatch => {
        return fetch(`${API_URL}/wake_up`, {
			headers: { "Authorization": 'wakeUp'} 
		})	
    }
}

