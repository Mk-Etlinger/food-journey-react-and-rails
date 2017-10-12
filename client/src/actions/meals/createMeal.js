const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const addMeal = meal => {
    return {
        type: 'CREATE_MEAL_SUCCESS',
        meal
    }
}

export const createMeal = (state) => {
    return dispatch => {
        return fetch(`${API_URL}/meals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
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
        .then(meal => dispatch(addMeal(meal)))
        .catch(err => console.log("error of ", err))
    }
}