const API_URL = process.env.REACT_APP_API_URL

let getToken = () => "Bearer " + localStorage.getItem("jwt")

const addSymptom = symptom => {
    return {
        type: 'CREATE_SYMPTOM_SUCCESS',
        symptom
    }
}

export const createSymptom = (state) => {
    return dispatch => {
        return fetch(`${API_URL}/symptoms`, {
            method: 'POST',
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
            .then(symptom => dispatch(addSymptom(symptom)))
            .catch(err => console.log("error of ", err))
    }
}