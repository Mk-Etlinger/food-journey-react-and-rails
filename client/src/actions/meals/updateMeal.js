const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const addUpdatedMeal = meal => {
    return {
        type: 'UPDATE_MEAL_SUCCESS',
        meal
    }
}

export const updateMeal = (state) => {
    return dispatch => {
        return fetch(`${API_URL}/meals/${state.mealId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token()
            },
            body: JSON.stringify({ 
                meal: Object.assign({}, state, { 
                    ingredients_attributes: 
                        { 
                            name: state.ingredients
                        }
                    })
                })
            })
        .then(response => response.json())
        .then(meal => dispatch(addUpdatedMeal(meal)))
        .catch(err => console.log("error of ", err))
    }
}