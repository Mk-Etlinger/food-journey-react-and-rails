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
        }
    }

    handleOnChange = (e) => {
        const { name, value } = e.target
        const currentMealFormData = Object.assign({}, this.props.mealFormData, {
            [name]: value
        })
        this.props.updateMealFormData(currentMealFormData)
    }

    handleRadioOnChange = (value) => {
        const currentMealFormData = Object.assign({}, this.props.mealFormData, {
            meal_type: value
        })
        this.props.updateMealFormData(currentMealFormData)
    }

    handleShowForm = (e) => {
        this.setState({ showForm: true })
        this.props.hideSymptomButton()
    }
    
    handleHideForm = (e) => {
        this.setState({ showForm: false })
        this.props.showSymptomButton()
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.createMeal(this.props.mealFormData)
        this.setState({ showForm: false })
        this.props.showSymptomButton()
    }

    render() {
        const { ingredients, meal_type } = this.props.mealFormData
        const { symptomFormData } = this.props
        
        let divStyle = { width: '40%', border: '1px solid  #d8edf3', boxShadow: '2px 6px 6px grey', borderRadius: '4px' , padding: '20px', margin: '0 auto 0 auto' }
        return (
            this.state.showForm === true ?
                <div style={divStyle}>
                    <span onMouseOver="" onClick={this.handleHideForm} style={{ margin: '0 0 99% 97%', cursor: 'pointer' }}>x</span>
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
                    {symptomFormData.active === true || 
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