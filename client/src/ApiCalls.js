
   export const post = () => {
        return fetch('/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                meal: Object.assign({}, this.state, { 
                    ingredients_attributes: 
                        { 
                            name: this.state.ingredients_attributes 
                        }
                    })
                })
            })
        .then(response => response.json())
        .then(meal => console.log(meal))
        .catch(err => console.log("error of ", err))
    }