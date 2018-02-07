import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../reusables/InputField';
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import { createMeal } from '../../actions/meals/createMeal';
import { updateMealFormData } from '../../actions/mealForm';
import { hideSymptomButton, showSymptomButton } from '../../actions/toggleSymptomButton';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';
import RecentsContainer from './RecentsContainer';
import Box from 'grommet/components/Box';

class AddItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            mealForm: mealFormState,
            symptomForm: SymptomFormState,
            showForm: false,
            ActiveForm: null,
        }

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange = (e) => {
        const formName = this.state.ActiveForm === MealForm ? 'mealForm' : 'symptomForm'
        const { name, value } = e.target
        
        this.setState({ [formName]: { [name]: value } })
    }

    handleRadioOnChange = (value) => {
        this.setState({ meal_type: value })
    }

    handleShowForm = (e) => {
        this.setState({ showForm: true })
        const component = componentList[e.target.id] || componentList[e.currentTarget.id]
        this.setState({
            ActiveForm: component
        })
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
        const { ActiveForm } = this.state
        const { symptomFormData } = this.props
        const formProps = ActiveForm === MealForm ? this.state.mealForm : this.state.symptomForm
        let divStyle = { border: '1px solid  #d8edf3', boxShadow: '2px 6px 6px grey', borderRadius: '4px' , padding: '20px'}
        return (
            <div>
            { this.state.showForm ?
                <div style={ divStyle }>
                    <ActiveForm formData={ formProps }
                        hideForm={ this.handleHideForm } 
                        onChangeCb={ this.handleOnChange } />
                </div>
            :
                <div>
                    { symptomFormData.active || 
                    <Button id='MealForm'
                        icon={<AddIcon />}
                        label='Meal'
                        onClick={ this.handleShowForm } />
                    }
                </div>
            }
                <RecentsContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        symptomFormData: state.symptomFormData
    }
}

const mealFormState = {
    showForm: false,
    meal_type: '',
    ingredients: '',
}

const SymptomFormState = {
    showForm: false,
    showNotes: false,
    description: '',
    severity: 0,
    stress_level: 0,
    notes: '',
    occurred_at: 0,
}

const componentList = {
    MealForm,
    SymptomForm,
};

export default connect(mapStateToProps, { 
    createMeal,
    hideSymptomButton,
    showSymptomButton,
    updateMealFormData 
})(AddItemContainer);
