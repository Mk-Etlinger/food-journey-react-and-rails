import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../reusables/InputField';
import ToggleRadioButtons from '../reusables/ToggleRadioButtons';
import { createMeal } from '../../actions/meals/createMeal';
import { updateMealFormData } from '../../actions/mealForm';
import { hideSymptomButton, showSymptomButton } from '../../actions/toggleSymptomButton';
import AddIcon from 'grommet/components/icons/base/Add';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormFields from 'grommet/components/FormFields';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';

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

        return (
            this.state.showForm ?
                <Layer closer
                    overlayClose
                    onClose={ this.handleHideForm }>
                    <Form 
                        onSubmit={ this.handleOnSubmit }> 
                        <FormFields>
                            <h2>What's on the Menu?</h2>
                            <ToggleRadioButtons
                                currentValue={ meal_type }
                                name='meal_type'
                                fields={ ['breakfast', 'lunch', 'dinner', 'snack'] }
                                onChangeCb={ this.handleOnChange }/>
                            <InputField name="ingredients" 
                                type="text"
                                value={ ingredients }
                                onChangeCb={ this.handleOnChange }
                                placeholder={ "Eg: eggs, bacon, salad" }/>
                        </FormFields>
                        <Footer pad='small' 
                            justify='center'>
                            <Button type="submit"
                                primary
                                pad='small'
                                label='Add' />
                        </Footer>
                    </Form>
                </Layer>
            :
                <div>
                    { symptomFormData.active || 
                        <Button id='MealForm'
                            icon={ <AddIcon /> }
                            label='Meal'
                            onClick={ this.handleShowForm } />
                    }
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

