import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../components/InputField';
import RadioInput from '../components/RadioInput';
import { createMeal } from '../actions/createMeal';
import { updateMealFormData } from '../actions/mealForm';
import { hideSymptomButton, showSymptomButton } from '../actions/toggleSymptomButton';
import { Button } from 'react-bootstrap';

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
        this.setState({ showForm: true })
        this.props.hideSymptomButton()
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.props.createMeal(this.props.mealFormData)
        this.setState({ showForm: false })
        this.props.showSymptomButton()
    }

    render() {
        const { meal_type, ingredients } = this.props.mealFormData
        const { symptomFormData } = this.props
        return (
            this.state.showForm === true ?
                <div>
                    <form onSubmit={this.handleOnSubmit}>                    
                        <RadioInput value="breakfast" 
                            meal_type={meal_type} 
                            onChangeCb={this.handleOnChange} />
                        <RadioInput value="lunch" 
                            meal_type={meal_type} 
                            onChangeCb={this.handleOnChange} />
                        <RadioInput value="dinner" 
                            meal_type={meal_type} 
                            onChangeCb={this.handleOnChange} />
                        <RadioInput value="snack" 
                            meal_type={meal_type} 
                            onChangeCb={this.handleOnChange} />
                        <InputField name="ingredients" 
                            type="text"
                            value={ingredients}
                            onChangeCb={this.handleOnChange}
                            placeholder={"Eg: eggs, bacon, salad"}/>
                        <input type="submit" value="Create Meal"/>
                    </form>
                </div>
            :
            <div>
                {symptomFormData.active === true ? 
                    '' // if symptom form is active, hide add meal button
                :
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShowForm}>+ Meal</Button>
                }
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        mealFormData: state.mealFormData,
        symptomFormData: state.symptomFormData
    }
}

export default connect(mapStateToProps, { 
    createMeal,
    hideSymptomButton,
    showSymptomButton,
    updateMealFormData 
})(MealForm);