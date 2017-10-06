import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../components/InputField';
import RadioInput from '../components/RadioInput';
import { createMeal } from '../actions/createMeal';
import { updateMealFormData } from '../actions/mealForm';

class MealForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnChange(e) {
        const { name, value } = e.target
        const currentMealFormData = Object.assign({}, this.props.mealFormData, {
            [name]: value
        })
        this.props.updateMealFormData(currentMealFormData)         
    }

    handleShowForm(e) {
        this.setState({
            showForm: true
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.props.createMeal(this.props.mealFormData)
        this.setState({
            showForm: false,           
        })
    }

    render() {
        const { showForm, meal_type, ingredients, description } = this.props.mealFormData
        return (
            this.state.showForm === true ?
                <div>
                    <form onSubmit={this.handleOnSubmit}>                    
                        <RadioInput value="breakfast" meal_type={meal_type} onChangeCb={this.handleOnChange} />
                        <RadioInput value="lunch" meal_type={meal_type} onChangeCb={this.handleOnChange} />
                        <RadioInput value="dinner" meal_type={meal_type} onChangeCb={this.handleOnChange} />
                        <RadioInput value="snack" meal_type={meal_type} onChangeCb={this.handleOnChange} />
                        <InputField name="ingredients" type="text" value={ingredients} onChangeCb={this.handleOnChange}/>            
                        <InputField name="description" type="text" value={description} onChangeCb={this.handleOnChange}/>            
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

const mapeStateToProps = state => {
    return {
        mealFormData: state.mealFormData
    }
}

export default connect(mapeStateToProps, { createMeal, updateMealFormData })(MealForm);