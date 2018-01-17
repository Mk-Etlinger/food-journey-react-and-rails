import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../reusables/InputField';
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import { createMeal } from '../../actions/meals/createMeal';
import { updateMealFormData } from '../../actions/mealForm';
import { hideSymptomButton, showSymptomButton } from '../../actions/toggleSymptomButton';
import { Button, Form } from 'react-bootstrap';

class MealForm extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
            meal_type: '',
            ingredients: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleRadioOnChange = (value) => {
        this.setState({ meal_type: value })
    }

    handleShowForm = () => {
        this.setState({ showForm: true })
        this.props.hideSymptomButton()
    }
    
    handleHideForm = () => {
        this.setState({ showForm: false })
        this.props.showSymptomButton()
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.createMeal(this.state)
        this.setState({ showForm: false })
        this.props.showSymptomButton()
    }

    render() {
        const { ingredients, meal_type } = this.state
        const { symptomFormData } = this.props
        let divStyle = { border: '1px solid  #d8edf3', boxShadow: '2px 6px 6px grey', borderRadius: '4px' , padding: '20px', margin: '0 auto 0 auto' }
        return (
            this.state.showForm ?
                <div style={divStyle}>
                    <span onClick={this.handleHideForm} style={{ margin: '0 0 99% 97%', cursor: 'pointer' }}>x</span>
                    <Form inline onSubmit={this.handleOnSubmit}>
                        <ToggleRadioButtons
                            currentValue={meal_type}
                            name='meal_type'
                            fields={['breakfast', 'lunch', 'dinner', 'snack']}
                            onChangeCb={this.handleRadioOnChange}/>
                        <InputField name="ingredients" 
                            type="text"
                            value={ingredients}
                            onChangeCb={this.handleOnChange}
                            placeholder={"Eg: eggs, bacon, salad"}/>
                        <input type="submit" value="Create Meal"/>
                    </Form>
                </div>
            :
                <div>
                    {symptomFormData.active || 
                        <Button
                            style={{ width: '125px' }}
                            bsStyle="primary" 
                            bsSize="large" 
                            onClick={this.handleShowForm}
                            >
                            + Meal
                            </Button>}
                </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        symptomFormData: state.symptomFormData
    }
}

export default connect(mapStateToProps, { 
    createMeal,
    hideSymptomButton,
    showSymptomButton,
    updateMealFormData 
})(MealForm);