import React, { Component } from 'react';
import InputField from '../components/InputField';
import RadioInput from '../components/RadioInput';

class MealForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
            mealType: '',
            ingredients: '',
        }

        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleRadioChange(e) {
        this.setState({
            mealType: e.target.value
        })        
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })                
        console.log("changing state!")
    }

    handleShowForm(e) {
        this.setState({
            showForm: true
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        // fetch/post to Meals/new 
        this.setState({
            showForm: false,
            mealType: '',
            ingredients: '',
        })
    }

    render() {
        return (
            this.state.showForm === true ?
                <div>
                    <form onSubmit={this.handleOnSubmit}>                    
                        <RadioInput name="breakfast" mealType={this.state.mealType} onChangeCb={this.handleRadioChange} />
                        <RadioInput name="lunch" type="text" value={this.state.mealType} onChangeCb={this.handleInputChange} />
                        <RadioInput name="dinner" type="text" value={this.state.mealType} onChangeCb={this.handleInputChange} />
                        <RadioInput name="snack" type="text" value={this.state.mealType} onChangeCb={this.handleInputChange} />
                        <InputField name="ingredients" type="text" value={this.state.ingredients} onChangeCb={this.handleInputChange}/>            
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

export default MealForm;