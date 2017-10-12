const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const addUpdatedSymptom = symptom => {
    return {
        type: 'UPDATE_SYMPTOM_SUCCESS',
        symptom
    }
}

export const updateSymptom = (state) => {
    return dispatch => {
        return fetch(`${API_URL}/symptoms/${state.symptomId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify({ 
                symptom: Object.assign({}, state, { 
                    ingredients_attributes: 
                        {                                                         
                            occurred_at: state.occurred_at,                            
                        },
                    reactions_attributes: 
                        {                             
                            severity: state.severity,
                            notes: state.notes,
                            stress_level: state.stress_level,
                        },
                    reaction_logs:
                        {
                            occurred_at: state.occurred_at
                        }
                })
            })
        })
        .then(response => response.json())
        .then(meal => dispatch(addUpdatedSymptom(meal)))
        .catch(err => console.log("error of ", err))
    }
}