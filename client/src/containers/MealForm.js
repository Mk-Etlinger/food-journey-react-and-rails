import React, { Component } from 'react';
import InputField from '../components/InputField';
import RadioInput from '../components/RadioInput';

class MealForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
            meal_type: '',
            ingredients: '',
            description: '',
            meal: {},
        }

        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleRadioChange(e) {
        this.setState({
            meal_type: e.target.value
        })        
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })                
    }

    handleShowForm(e) {
        this.setState({
            showForm: true
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.setState({ showForm: false })
        let token = "Bearer " + localStorage.getItem("jwt")
        return fetch('/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ 
                meal: Object.assign({}, this.state, { 
                    ingredients_attributes: 
                        { 
                            name: this.state.ingredients
                        }
                    })
                })
            })
        .then(response => response.json())
        .then(meal => this.setState({ meal })) // dispatch a new meal to this.props.meals then mapPropsToState
        .catch(err => console.log("error of ", err))
    }

    render() {
        console.log(this.state.meal)
        return (
            this.state.showForm === true ?
                <div>
                    <form onSubmit={this.handleOnSubmit}>                    
                        <RadioInput name="breakfast" meal_type={this.state.meal_type} onChangeCb={this.handleRadioChange} />
                        <RadioInput name="lunch" type="text" value={this.state.meal_type} onChangeCb={this.handleInputChange} />
                        <RadioInput name="dinner" type="text" value={this.state.meal_type} onChangeCb={this.handleInputChange} />
                        <RadioInput name="snack" type="text" value={this.state.meal_type} onChangeCb={this.handleInputChange} />
                        <InputField name="ingredients" type="text" value={this.state.ingredients} onChangeCb={this.handleInputChange}/>            
                        <InputField name="description" type="text" value={this.state.description} onChangeCb={this.handleInputChange}/>            
                        <input type="submit" value="Create Meal"/>
                    </form>
                </div>
            :
            <div>
                <button onClick={this.handleShowForm}>Add a meal</button>
            </div>
        )
    }
}

MealForm.defaultProps = {
    meals: [],
}

export default MealForm;